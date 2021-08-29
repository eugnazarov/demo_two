import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import {ALL_CITIES} from '../api';

class Profile {
  currentTown = null;
  cities = [];
  constructor() {
    makeAutoObservable(this);
  }
  fetchCities() {
    axios.get(ALL_CITIES).then(res => {
      this.cities = res.data.data.cities;
    });
  }
  setTown(town) {
    this.currentTown = town;
  }
  clearProfile() {
    this.currentTown = null;
  }
}

export default new Profile();
