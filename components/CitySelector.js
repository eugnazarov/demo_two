import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../globalStyles';
import {Picker} from '@react-native-picker/picker';
import Profile from '../store/Profile';
import {observer} from 'mobx-react-lite/src/observer';

const CitySelector = observer(({selected}) => {
  const [selectedCity, setSelectedCity] = useState(selected);
  return (
    <View style={styles.container}>
      <Picker
        style={{width: '100%'}}
        selectedValue={selectedCity}
        onValueChange={(itemValue, index) => {
          setSelectedCity(itemValue);
        }}>
        {Profile.cities.map(city => (
          <Picker.Item label={city.name} value={city.name} />
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
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  list: {
    marginTop: 15,
    flex: 1,
  },
};
