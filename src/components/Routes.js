import React from 'react';
import {Drawer, Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import SideMenu from './SideMenu';
import EventsView from '../views/EventsView';
import {globalStyles} from '../../globalStyles';
import {observer} from 'mobx-react-lite';
import Profile from '../store/Profile';
import {SafeAreaView} from 'react-native';

import NewsView from '../views/NewsView';
import {Icon} from 'react-native-elements';
import CinemaView from '../views/CinemaView';
import LoginView from '../views/LoginView';
import GeoNotFoundView from '../views/GeoNotFoundView';
import ItemView from '../views/ItemView';

const Routes = observer(() => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Router>
        <Drawer
          drawerIcon={() => <Icon name="menu" type="material" color="#fff" />}
          contentComponent={SideMenu}
          drawerWidth={311}>
          <Stack key="root">
            <Scene
              hideNavBar
              key="login"
              drawer={false}
              component={LoginView}
            />
            <Tabs
              tabStyle={{
                backgroundColor: 'rgba(104,104,104,0.22)',
              }}
              key="homescreen"
              labelStyle={{textTransform: 'uppercase'}}
              hideNavBar>
              <Scene
                icon={() => (
                  <Icon name="event" type="material" color="#517fa4" />
                )}
                key="events"
                title="Афиша"
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
            <Scene
              key="item"
              component={ItemView}
              back
              titleStyle={{fontSize: 13, flexWrap: 'wrap'}}
              title={({navigation}) => navigation.state.params.item.title}
            />
            <Scene
              drawer={false}
              hideNavBar
              key="geo"
              component={GeoNotFoundView}
            />
          </Stack>
        </Drawer>
      </Router>
    </SafeAreaView>
  );
});

export default Routes;
