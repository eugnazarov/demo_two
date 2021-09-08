import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import Geolocation from '@react-native-community/geolocation';
import {Button, Image, Input} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Profile from '../store/Profile';

const LoginView = observer(() => {
  const onLoginPress = () => {
    Profile.login('Евгений');
    Actions.homescreen();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={{width: 200, height: 200}}
      />
      <View style={styles.form}>
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Button title="Войти" onPress={onLoginPress} />
      </View>
    </View>
  );
});

export default LoginView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  form: {
    marginTop: 50,
    width: '100%',
    justifyContent: 'center',
  },
});
