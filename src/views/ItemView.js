import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Image, Text} from 'react-native-elements';

const ItemView = ({item}) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={{width: 200, height: 200}}
        source={{uri: item.public_image}}
      />
      <Text style={styles.title} h1>
        {item.title}
      </Text>
      <Text style={styles.main}>{item.content}</Text>
    </ScrollView>
  );
};

export default ItemView;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 25},
  title: {marginBottom: 15},
  main: {textAlign: 'justify', fontSize: 15, lineHeight: 20},
});
