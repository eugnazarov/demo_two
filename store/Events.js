import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import {ALL_EVENTS, BASE_URL} from '../api';

class Events {
  events = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchEvents(id) {
    console.log(ALL_EVENTS + id);
    axios.get(ALL_EVENTS + id).then(res => {
      this.events = res.data.data.events.data;
    });
  }
}

export default new Events();
