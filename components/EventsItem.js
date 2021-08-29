import React, {useState} from 'react';
import {Image, Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import {BASE_URL} from '../api';
import Collapsible from 'react-native-collapsible';

const EventsItem = ({item}) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <TouchableHighlight
      underlayColor={'#4eb8fe'}
      onPress={() => {
        setCollapsed(prevState => !prevState);
      }}>
      <View style={{borderBottomWidth: 1}}>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: item.public_image}} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Collapsible collapsed={collapsed}>
          <Text>{item.content}</Text>
        </Collapsible>
      </View>
    </TouchableHighlight>
  );
};

export default EventsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    borderColor: 'rgba(113,113,113,0.35)',

    width: '100%',
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    flex: 1,
    marginLeft: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
