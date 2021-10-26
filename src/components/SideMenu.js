import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Profile from '../store/Profile';
import CitySelector from './CitySelector';
import {globalStyles} from '../../globalStyles';
import {Button, Icon, Switch, withTheme} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import ProfileView from '../views/ProfileView';

const SideMenu = observer(({theme}) => {
  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        padding: 30,
        backgroundColor: theme.colors.background,
      }}>
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

      <Switch
        value={Profile.isDarkMode}
        onValueChange={value => Profile.toggleTheme(value)}
      />
      <Button title="Выход" onPress={() => Profile.logout()} />
    </View>
  );
});
export default withTheme(SideMenu);

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
