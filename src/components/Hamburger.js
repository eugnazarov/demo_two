import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Hamburger = () => {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../assets/icons/burger.png')}
    />
  );
};

export default Hamburger;
