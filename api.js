import axios from 'axios';

export const BASE_URL = 'https://yourculture.ru';
export const API_URL = 'https://yourculture.ru/api';

const API_TOKEN =
  'v9uYLh70czKPPaHZ3wxPYl232pE3x5v8vlO4WASnfYJCVoBGjlzR5ihX9XUb';

export const ALL_CITIES = `${API_URL}/get/cities/all?api_token=${API_TOKEN}`;

export const ALL_EVENTS = `${API_URL}/get/events/all?api_token=${API_TOKEN}&city_id=`;
export const getCategories = () => {
  return axios.get(`${API_URL}/get/events/categories?api_token=${API_TOKEN}`);
};
export const getNews = (cityId, page) => {
  return axios.get(
    `${API_URL}/get/news/all/?api_token=${API_TOKEN}&city_id=${cityId}&page=${page}`,
  );
};

export const getMovies = page => {
  return axios.get(
    `${API_URL}/get/films/all?api_token=${API_TOKEN}&page=${page}&orderBy=date`,
  );
};

export const getEvents = (cityId, page, category) => {
  if (category) {
    return axios.get(
      `${API_URL}/get/events/all?api_token=${API_TOKEN}&city_id=${cityId}&page=${page}&category=${category.slug}`,
    );
  } else {
    return axios.get(
      `${API_URL}/get/events/all?api_token=${API_TOKEN}&city_id=${cityId}&page=${page}`,
    );
  }
};
