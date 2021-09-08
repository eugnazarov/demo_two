import {action, makeAutoObservable} from 'mobx';
import axios from 'axios';
import {ALL_CITIES} from '../api';

class Profile {
  currentTown = null;
  cities = [];
  constructor() {
    makeAutoObservable(this);
  }
  fetchCities() {
    axios.get(ALL_CITIES).then(
      action(res => {
        this.cities = res.data.data.cities;
        this.currentTown = this.cities[0];
      }),
    );
  }
  setTown(town) {
    this.currentTown = town;
  }
  clearProfile() {
    this.currentTown = null;
  }
}

export default new Profile();
