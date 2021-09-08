import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Image, Text} from 'react-native-elements';

const ItemView = ({item}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.stage}>
          {item.verified_stages?.map(
            stage => `${stage.name}, (${stage.address})`,
          )}
        </Text>
        <Image
          style={{width: 200, height: 200}}
          source={{uri: item.public_image}}
        />
        <Text style={styles.title} h3>
          {item.title}
        </Text>
        <Text style={styles.main}>{item.content}</Text>
      </View>
    </ScrollView>
  );
};

export default ItemView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 40,
    paddingRight: 5,
    paddingLeft: 5,
  },
  stage: {
    fontSize: 15,
    marginBottom: 9,
  },
  title: {marginBottom: 15},
  main: {textAlign: 'justify', fontSize: 15, lineHeight: 20},
});
