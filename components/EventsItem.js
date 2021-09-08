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
          <View style={styles.info}>
            <Text style={styles.stage}>
              {item.verified_stages?.map(stage => stage.name)}
            </Text>
            <Text style={styles.date}>{item.first_date?.date}</Text>
            <Text style={styles.title}>{item.title} </Text>
          </View>

          <Image style={styles.image} source={{uri: item.public_image}} />
        </View>
        <Collapsible collapsed={collapsed}>
          {item.description && (
            <Text style={styles.content}>{item.description}</Text>
          )}
          <Text style={styles.content}>
            {item.content?.replace(/<\/?[^>]+(>|$)/g, '')}
          </Text>
        </Collapsible>
      </View>
    </TouchableHighlight>
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
