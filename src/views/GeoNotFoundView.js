import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CitySelector from '../components/CitySelector';

const GeoNotFoundView = ({city}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Вашего города {city} пока нет в нашей базе, выберите другой!
      </Text>
      <CitySelector />
    </View>
  );
};

export default GeoNotFoundView;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#fff',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
  },
});
