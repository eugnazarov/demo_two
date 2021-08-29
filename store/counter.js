import {makeAutoObservable} from 'mobx';

class Counter {
  value = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increase() {
    this.value++;
  }
  decrease() {
    this.value > 0 && this.value--;
  }
}

export default new Counter();
