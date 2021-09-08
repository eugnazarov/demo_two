import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import Profile from '../store/Profile';

const ProfileView = observer(() => {
  console.log(Profile.data.user);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Имя: {Profile.data.user.name}</Text>
      <Text style={styles.text}>Город: {Profile.data.user.city.name}</Text>
      <Text style={styles.text}>E-mail: {Profile.data.user.email}</Text>
    </View>
  );
});

export default ProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
    padding: 15,
    width: '100%',
    backgroundColor: 'rgba(172,171,171,0.09)',
  },
  text: {
    color: 'black',
  },
});
