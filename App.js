import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Button} from 'react-native';
import {observer} from 'mobx-react-lite';
import Routes from './components/Routes';
import Profile from './store/Profile';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import Events from './store/Events';

const App = observer(() => {
  useEffect(() => {
    Profile.fetchCities();
    Events.fetchCategories();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </SafeAreaProvider>
  );
});

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 25,
  },
  mainText: {
    fontSize: 18,
  },
});