import {action, makeAutoObservable} from 'mobx';
import axios from 'axios';
import {ALL_CITIES, getPosition} from '../../api';
import {Actions} from 'react-native-router-flux';

class Profile {
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
    console.log('find');
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
    this.name = null;
    this.geoPosition = null;
    this.currentTown = null;
    Actions.login();
  }
  login(name) {
    this.name = name;
  }

  setTown(town) {
    this.currentTown = town;
  }
  clearProfile() {
    this.currentTown = null;
  }
}

export default new Profile();
