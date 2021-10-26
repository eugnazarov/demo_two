import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Button} from 'react-native';
import {observer} from 'mobx-react-lite';
import Routes from './src/components/Routes';
import Profile from './src/store/Profile';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import Events from './src/store/Events';
import {useColorScheme} from 'react-native-appearance';
import {ThemeProvider} from 'react-native-elements';

const App = observer(() => {
  const colorScheme = 'light';

  const darkTheme = {
    colors: {
      primary: 'red',
      background: 'black',
    },
  };
  const lightTheme = {
    colors: {
      primary: '#26A69A',
      background: '#fff',
    },
    Button: {
      raised: true,
    },
  };
  useEffect(() => {
    if (Profile.token) {
      Profile.fetchProfile();
    }
  }, [Profile.token]);
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={Profile.isDarkMode ? darkTheme : lightTheme}>
        <SafeAreaView style={{flex: 1}}>
          <Routes />
        </SafeAreaView>
      </ThemeProvider>
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
