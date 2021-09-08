import {makeAutoObservable} from 'mobx';

class Settings {
  value = null;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Settings();
