import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Button} from 'react-native';
import {observer} from 'mobx-react-lite';
import Routes from './src/components/Routes';
import Profile from './src/store/Profile';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import Events from './src/store/Events';

const App = observer(() => {
  useEffect(() => {
    if (Profile.token) {
      Profile.fetchProfile();
    }
  }, [Profile.token]);
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
