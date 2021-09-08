import React, {useState} from 'react';
import {Image, Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import {BASE_URL} from '../../api';
import Collapsible from 'react-native-collapsible';
import {Avatar, Badge, ListItem} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

const EventsItem = ({item}) => {
  return (
    <ListItem onPress={() => Actions.item({item})} bottomDiviver>
      <Avatar rounded source={{uri: item.public_image}} />
      <ListItem.Content>
        {item.first_date && <Badge value={item.first_date.date} />}
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default EventsItem;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingBottom: 25,
    flex: 1,
    alignItems: 'center',
    borderColor: 'rgba(113,113,113,0.35)',
    width: '100%',
  },
  stage: {fontStyle: 'italic'},
  content: {fontSize: 16, paddingBottom: 5},
  image: {
    flex: 1,
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  info: {
    marginLeft: 40,
    flex: 1,
    alignItems: 'flex-start',

    alignSelf: 'flex-start',
  },
  date: {marginBottom: 2},
  title: {
    flex: 1,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
