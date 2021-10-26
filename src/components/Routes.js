import React from 'react';
import {Drawer, Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import SideMenu from './SideMenu';
import EventsView from '../views/EventsView';
import {globalStyles} from '../../globalStyles';
import {observer} from 'mobx-react-lite';
import Profile from '../store/Profile';
import {Platform, SafeAreaView, View} from 'react-native';

import NewsView from '../views/NewsView';
import {Icon, Text} from 'react-native-elements';
import CinemaView from '../views/CinemaView';
import LoginView from '../views/LoginView';
import GeoNotFoundView from '../views/GeoNotFoundView';
import ItemView from '../views/ItemView';
import ProfileView from '../views/ProfileView';
import NavBar from './NavBar';
import Events from '../store/Events';

const Routes = observer(() => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Router>
        <Drawer contentComponent={SideMenu} drawerWidth={311}>
          <Stack key="root">
            {!Profile.token && (
              <Scene
                hideNavBar
                key="login"
                drawer={false}
                component={LoginView}
              />
            )}
            <Tabs
              key="homeScreen"
              labelStyle={{textTransform: 'uppercase'}}
              hideNavBar>
              <Scene
                icon={() => (
                  <Icon name="event" type="material" color="#517fa4" />
                )}
                key="events"
                back={false}
                title="Афиша"
                rightButtonAction={() => {
                  Events.toggleCategoryPicker();
                }}
                component={EventsView}
                titleStyle={{
                  textTransform: 'uppercase',
                  fontSize: 25,
                  color: '#fff',
                }}
                headerMode={Platform.OS === 'ios' ? 'float' : 'screen'}
                navBar={NavBar}
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
                navBar={NavBar}
              />
              <Scene
                key="news"
                title="новости"
                component={NewsView}
                icon={() => (
                  <Icon name="article" type="material" color="#517fa4" />
                )}
                navBar={NavBar}
                titleStyle={{
                  textTransform: 'uppercase',
                  fontSize: 25,
                  color: '#fff',
                }}
              />
              <Scene
                hideNavBar
                headerMode={Platform.OS === 'ios' ? 'float' : 'screen'}
                key="profile"
                title="Профиль"
                component={ProfileView}
                icon={() => (
                  <Icon name="face" type="material" color="#517fa4" />
                )}
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
