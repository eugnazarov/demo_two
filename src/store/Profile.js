import {action, makeAutoObservable} from 'mobx';
import axios from 'axios';
import {ALL_CITIES, auth, clearToken, getPosition, getProfile} from '../../api';
import {Actions} from 'react-native-router-flux';
import {ToastAndroid} from 'react-native';

class Profile {
  token = '';
  data = {};
  currentTown = null;
  geoPosition = null;
  cities = [];
  name: null;
  constructor() {
    makeAutoObservable(this);
  }
  fetchCities() {
    axios.get(ALL_CITIES).then(
      action(res => {
        this.cities = res.data.data.cities;
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
        } else {
          Actions.geo({city: res.data.city});
        }
      }),
    );
  }

  logout() {
    this.clearProfile();
    clearToken();
  }
  login(login, password) {
    auth(login, password).then(
      action(res => {
        const {access_token} = res.data.data;
        console.log(access_token);
        if (access_token) {
          this.token = access_token;
          Actions.homescreen();
        } else {
          console.log('error');
          ToastAndroid.showWithGravity(
            'Пользователь не найден!',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
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
    this.currentTown = town;
  }
  clearProfile() {
    this.currentTown = null;
    this.token = '';
  }
}

export default new Profile();
