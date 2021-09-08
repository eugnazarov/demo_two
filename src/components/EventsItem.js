import React, {useState} from 'react';
import {Image, Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import {BASE_URL} from '../../api';
import Collapsible from 'react-native-collapsible';
import {Avatar, Badge, ListItem} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

const EventsItem = ({item}) => {
  console.log(item);
  return (
    <ListItem onPress={() => Actions.item({item})} bottomDivider>
      <Avatar rounded source={{uri: item.public_image}} />
      <ListItem.Content>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          {item.first_date && (
            <Badge
              badgeStyle={{
                height: 25,
                paddingRight: 5,
                paddingLeft: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              containerStyle={styles.badge}
              value={item.first_date.date}
            />
          )}
          <View
            style={{
              alignItems: 'flex-end',
            }}>
            {item.actual_main_categories.map(category => (
              <Badge
                badgeStyle={{
                  height: 25,
                  paddingRight: 5,
                  paddingLeft: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                containerStyle={styles.badge}
                status="success"
                value={category.name}
              />
            ))}
          </View>
        </View>

        <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
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
  badge: {margin: 2},
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
