import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Profile from '../store/Profile';
import CitySelector from './CitySelector';
import {globalStyles} from '../../globalStyles';
import {Button, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

const SideMenu = observer(() => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => Actions.drawerClose()}
        containerStyle={{position: 'absolute', top: 8, right: 10}}
        icon={
          <Icon
            name="close"
            color="#fff"
            type="material"
            onPress={() => Actions.drawerClose()}
          />
        }
      />

      <Text style={globalStyles.fonts.viewTitle}>Культура твоего города</Text>
      <CitySelector selected={Profile.currentTown?.name} />
      <Button title="Выход" onPress={() => Profile.logout()} />
    </View>
  );
});
export default SideMenu;

const styles = {
  container: {
    position: 'relative',
    flex: 1,
    padding: 30,
  },
  mainText: {
    fontSize: 16,
  },
};
