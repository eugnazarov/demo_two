import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Button} from 'react-native';
import {observer} from 'mobx-react-lite';
import Routes from './components/Routes';

const App = observer(() => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
    </SafeAreaView>
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
