import React, {useEffect} from 'react';

import Profile from '../store/Profile';

import CitySelector from '../components/CitySelector';

const CitySelectorView = () => {
  useEffect(() => {
    Profile.fetchCities();
  }, []);
  return <CitySelector selected="Тольятти" />;
};

export default CitySelectorView;
