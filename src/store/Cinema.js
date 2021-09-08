import {action, makeAutoObservable} from 'mobx';
import {getCategories, getEvents, getMovies, getNews} from '../../api';

class Cinema {
  movies = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadMoreFilms(page) {
    this.loading = true;
    getMovies(page).then(
      action(res => {
        this.movies = [...this.movies, ...res.data.data.films.data];
        this.loading = false;
      }),
    );
  }

  fetchMovies(page) {
    this.loading = true;
    getMovies(page)
      .then(
        action(res => {
          this.movies = [...this.movies, ...res.data.data.films.data];
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

export default new Cinema();
