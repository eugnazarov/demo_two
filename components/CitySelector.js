import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../globalStyles';
import {Picker} from '@react-native-picker/picker';
import Profile from '../store/Profile';
import {observer} from 'mobx-react-lite';

const CitySelector = observer(({selected}) => {
  const [selectedCity, setSelectedCity] = useState(selected);
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
        }}
      />
    </View>
  );
});

export default CitySelector;

const styles = {
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
  },
  list: {
    marginTop: 15,
    flex: 1,
  },
};
