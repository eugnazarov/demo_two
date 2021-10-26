import axios from 'axios';

export const BASE_URL = 'https://yourculture.ru';
export const API_URL = 'https://yourculture.ru/api';

const API_TOKEN =
  'wzKeGKTq6ptjyfry1cg2U5eJJnyW8Btl6PXvoT62pIobXTMaJpQsehBrZ4hW';

export const ALL_CITIES = `${API_URL}/get/cities/all?api_token=${API_TOKEN}`;

export const ALL_EVENTS = `${API_URL}/get/events/all?api_token=${API_TOKEN}&city_id=`;
export const getCategories = () => {
  return axios.get(`${API_URL}/get/events/categories?api_token=${API_TOKEN}`);
};
export const getNews = (cityId, page) => {
  return axios.get(
    `${API_URL}/get/news/all/?api_token=${API_TOKEN}&city_id=${
      cityId || ''
    }&page=${page}`,
  );
};
export const getMovies = page => {
  return axios.get(
    `${API_URL}/get/films/all?api_token=${API_TOKEN}&page=${page}&orderBy=date`,
  );
};

export const auth = (login, password) => {
  const string = `https://yourculture.ru/api/auth/login?api_token=${API_TOKEN}`;
  return axios.post(string, {login, password});
};

export const clearToken = () => {
  const string = `https://yourculture.ru/api/auth/logout?api_token=${API_TOKEN}`;
  return axios.post(string);
};

export const getEvents = (cityId, page, category) => {
  if (category) {
    return axios.get(
      `${API_URL}/get/events/all?api_token=${API_TOKEN}&city_id=${
        cityId || ''
      }&page=${page}&category=${category.slug}`,
    );
  } else {
    return axios.get(
      `${API_URL}/get/events/all?api_token=${API_TOKEN}&city_id=${
        cityId || ''
      }&page=${page}`,
    );
  }
};

export const getProfile = token => {
  return axios.get(`${API_URL}/get/user?api_token=${API_TOKEN}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPosition = ({latitude, longitude}) => {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`;

  return axios.get(url);
};
