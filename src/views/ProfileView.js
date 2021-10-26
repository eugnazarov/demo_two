import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import Profile from '../store/Profile';
import {Avatar} from 'react-native-elements';

const ProfileView = observer(() => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Avatar
          containerStyle={{marginRight: 10}}
          rounded
          size="medium"
          source={{
            uri:
              Profile.data.user.avatar ||
              `https://eu.ui-avatars.com/api/?name=${Profile.data.user.name}`,
          }}
        />
        <Text style={styles.text}>{Profile.data.user.name}</Text>
      </View>

      <Text style={styles.text}>{Profile.data.user?.city.name}</Text>
      <Text style={styles.text}>{Profile.data.user?.email}</Text>
      {Object.values(Profile.data.user).map(t => {
        console.log(t);
      })}
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
    fontSize: 25,
  },
});
