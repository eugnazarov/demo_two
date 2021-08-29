import React from 'react';
import {Button, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Profile from '../store/Profile';
import CitySelector from './CitySelector';
import {globalStyles} from '../globalStyles';

const SideMenu = observer(() => {
  return (
    <View style={styles.container}>
      <CitySelector selected={Profile.currentTown?.name} />
      <Button title="Выход" onPress={() => Profile.clearProfile()} />
    </View>
  );
});

export default SideMenu;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  mainText: {
    fontSize: 16,
  },
};
