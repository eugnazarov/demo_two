import {action, makeAutoObservable} from 'mobx';
import {getCategories, getEvents} from '../../api';

class Events {
  events = [];
  loading = false;
  categories = [];
  currentCategory = null;
  isCategoryPickerOpened = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleCategoryPicker() {
    this.isCategoryPickerOpened = !this.isCategoryPickerOpened;
  }

  fetchCategories() {
    getCategories().then(
      action(res => {
        this.categories = res.data.data.categories;
        this.currentCategory = this.categories[0];
      }),
    );
  }
  clearEvents() {
    this.events = null;
  }
  loadMoreEvents(id, page, category) {
    this.loading = true;
    getEvents(id, page, category).then(
      action(res => {
        this.events = [...this.events, ...res.data.data.events.data];
        this.loading = false;
      }),
    );
  }
  fetchEvents(id = 0, page, category) {
    this.loading = true;
    getEvents(id, page, category)
      .then(
        action(res => {
          this.events = res.data.data.events.data;
          this.loading = false;
        }),
      )
      .catch(
        action(res => {
          this.loading = false;
        }),
      );
  }
}

export default new Events();
