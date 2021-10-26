import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {Button, Icon, withTheme} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

const NavBar = ({navigation, theme}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          padding: 15,
          flexDirection: 'row',
          position: 'relative',
          justifyContent: 'center',
          backgroundColor: theme.colors.primary,
        }}>
        <Button
          containerStyle={{position: 'absolute', left: 20, top: 10}}
          onPress={Actions.drawerOpen}
          icon={() => <Icon name="menu" type="material" color="#fff" />}
        />
        <Text style={styles.title}>{navigation.state.params.title}</Text>
        <Button
          onPress={() => navigation.state.params.rightButtonAction()}
          containerStyle={{position: 'absolute', right: 20, top: 10}}
          icon={() => (
            <Icon type="ionicon" name="filter-outline" color="#fff" />
          )}
        />
      </View>
    </View>
  );
};

export default withTheme(NavBar);

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  title: {
    alignSelf: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 25,
    fontFamily: 'Futura',
  },
});
