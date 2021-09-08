import React from 'react';
import {Drawer, Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import SideMenu from './SideMenu';
import EventsView from '../Views/EventsView';
import {globalStyles} from '../globalStyles';
import {observer} from 'mobx-react-lite';
import Profile from '../store/Profile';
import {SafeAreaView} from 'react-native';

import NewsView from '../Views/NewsView';
import {Icon} from 'react-native-elements';
import CinemaView from '../Views/CinemaView';

const Routes = observer(() => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Router>
        <Drawer
          drawerIcon={() => <Icon name="menu" type="material" color="#fff" />}
          contentComponent={SideMenu}
          drawerWidth={311}>
          <Stack key="root">
            <Tabs
              tabStyle={{
                backgroundColor: 'rgba(104,104,104,0.22)',
              }}
              labelStyle={{textTransform: 'uppercase'}}
              hideNavBar>
              <Scene
                icon={() => (
                  <Icon name="event" type="material" color="#517fa4" />
                )}
                key="events"
                title="Афиша"
                initial={Profile.currentTown}
                component={EventsView}
                titleStyle={{
                  textTransform: 'uppercase',
                  fontSize: 25,
                  color: '#fff',
                }}
                navigationBarStyle={{
                  height: 80,
                  backgroundColor: globalStyles.colors.primary,
                }}
              />
              <Scene
                icon={() => (
                  <Icon name="movie" type="material" color="#517fa4" />
                )}
                key="movie"
                title="Кино"
                component={CinemaView}
                titleStyle={{
                  textTransform: 'uppercase',
                  fontSize: 25,
                  color: '#fff',
                }}
                navigationBarStyle={{
                  height: 80,
                  backgroundColor: globalStyles.colors.primary,
                }}
              />
              <Scene
                key="news"
                title="новости"
                component={NewsView}
                icon={() => (
                  <Icon name="article" type="material" color="#517fa4" />
                )}
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
            </Tabs>
          </Stack>
        </Drawer>
      </Router>
    </SafeAreaView>
  );
});

export default Routes;
