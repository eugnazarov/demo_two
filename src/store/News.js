import {action, makeAutoObservable} from 'mobx';

import {getEvents, getNews} from '../../api';

class News {
  news = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadMoreNews(id, page) {
    this.loading = true;
    getNews(id, page).then(
      action(res => {
        this.news = [...this.news, ...res.data.data.news.data];
        this.loading = false;
      }),
    );
  }

  fetchNews(id, page) {
    getNews(id, page).then(
      action(res => {
        this.news = [...this.news, ...res.data.data.news.data];
      }),
    );
  }
}

export default new News();
