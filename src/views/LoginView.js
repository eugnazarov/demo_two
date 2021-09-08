import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import {Button, Image, Input} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

const LoginView = observer(() => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={{width: 200, height: 200}}
      />
      <View style={styles.form}>
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Button title="Войти" onPress={() => Actions.homescreen()} />
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
