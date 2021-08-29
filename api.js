export const BASE_URL = 'https://yourculture.ru/';
export const API_URL = 'https://yourculture.ru/api/';

const API_TOKEN =
  'v9uYLh70czKPPaHZ3wxPYl232pE3x5v8vlO4WASnfYJCVoBGjlzR5ihX9XUb';

const CITY = '1';

export const ALL_CITIES = `${API_URL}get/cities/all?api_token=${API_TOKEN}`;

export const ALL_EVENTS = `${API_URL}get/events/all?api_token=${API_TOKEN}&city_id=`;
