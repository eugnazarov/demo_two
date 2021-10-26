import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {Picker} from '@react-native-picker/picker';

import Profile from '../store/Profile';
import {observer} from 'mobx-react-lite';
import {autorun} from 'mobx';
import {Actions} from 'react-native-router-flux';
import {Button} from 'react-native-elements';

const CitySelector = observer(({selected}) => {
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    if (Profile.currentTown) {
      setSelectedCity(Profile.currentTown.name);
    } else {
      setSelectedCity(Profile.cities[0]);
    }
  }, [Profile.currentTown]);

  return (
    <View style={styles.container}>
      <Picker
        testID="basic-picker"
        style={{backgroundColor: '#fff'}}
        itemStyle={{
          backgroundColor: '#fff',
          color: 'blue',
          fontSize: 17,
        }}
        mode={'modal'}
        selectedValue={selectedCity}
        onValueChange={(itemValue, index) => {
          setSelectedCity(itemValue);
        }}>
        {Profile.cities.map(city => (
          <Picker.Item
            style={{backgroundColor: '#fff', color: 'black'}}
            label={city.name}
            value={city.name}
          />
        ))}
      </Picker>
      <Button
        title="Выбрать"
        onPress={() => {
          const city = Profile.cities.find(item => item.name === selectedCity);
          Profile.setTown(city);
          Actions.homeScreen();
        }}
      />
    </View>
  );
});

export default CitySelector;

const styles = {
  container: {
    marginTop: 25,
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
  },

  list: {
    marginTop: 15,
    flex: 1,
  },
};
