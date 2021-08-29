import React from 'react';
import {Drawer, Router, Scene, Stack} from 'react-native-router-flux';
import SideMenu from './SideMenu';
import EventsView from '../Views/EventsView';
import {globalStyles} from '../globalStyles';
import CitySelectorView from '../Views/CitySelectorView';
import {observer} from 'mobx-react-lite/src/observer';
import Profile from '../store/Profile';
import {Image, SafeAreaView} from 'react-native';
import Hamburger from './Hamburger';

const Routes = observer(() => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Router>
        <Drawer drawerImage={{}} contentComponent={SideMenu} drawerWidth={311}>
          <Stack key="root">
            <Scene
              key="citySelect"
              component={CitySelectorView}
              hideNavBar
              initial={!Profile.currentTown}
            />
            <Scene
              initial={Profile.currentTown}
              key="events"
              title="события"
              component={EventsView}
              navigationBarStyle={{
                height: 80,
                backgroundColor: globalStyles.colors.primary,
              }}
              titleStyle={{
                textTransform: 'uppercase',
                fontSize: 25,
                color: '#fff',
              }}
            />
          </Stack>
        </Drawer>
      </Router>
    </SafeAreaView>
  );
});

export default Routes;
