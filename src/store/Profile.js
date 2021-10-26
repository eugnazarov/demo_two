import {action, makeAutoObservable} from 'mobx';
import axios from 'axios';
import {ALL_CITIES, auth, clearToken, getPosition, getProfile} from '../../api';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage, Platform, ToastAndroid, Alert} from 'react-native';
import {makePersistable} from 'mobx-persist-store';

class Profile {
  loading = false;
  token = '';
  data = {};
  currentTown = null;
  geoPosition = null;
  cities = [];
  name = null;
  isDarkMode = false;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'profile',
      properties: ['token', 'data', 'currentTown', 'geoPosition', 'name'],
      storage: AsyncStorage,
    }).then(() => {
      console.log('persisted');
    });
  }

  toggleTheme(value) {
    this.isDarkMode = value;
  }

  fetchCities() {
    this.loading = true;
    axios.get(ALL_CITIES).then(
      action(res => {
        this.cities = res.data.data.cities;
        this.loading = false;
      }),
    );
  }

  getTown(name) {
    return this.cities.find(city => city.name === name);
  }

  getGeo(position) {
    getPosition(position).then(
      action(res => {
        this.geoPosition = res.data.city;
        const town = this.getTown(res.data.city);
        if (town) {
          this.currentTown = town;
        }
      }),
    );
  }

  async logout() {
    this.clearProfile();
    await clearToken();
  }

  login(login, password) {
    this.loading = true;
    auth(login, password).then(
      action(res => {
        const {access_token} = res.data.data;
        console.log(access_token);
        if (access_token) {
          this.token = access_token;
          Actions.homescreen();
          this.loading = false;
        } else {
          this.loading = false;
          if (Platform.OS === 'android') {
            ToastAndroid.showWithGravity(
              'Пользователь не найден или неверный пароль',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          } else {
            Alert.alert('Пользователь не найден или неверный пароль');
          }
        }
      }),
    );
  }

  fetchProfile() {
    getProfile(this.token).then(res => {
      this.data = res.data.data;
    });
  }

  setTown(town) {
    console.log(`${town.name} set`);
    this.currentTown = town;
  }

  clearProfile() {
    this.currentTown = null;
    this.token = '';
  }
}

export default new Profile();
