import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const CategoryButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
  button: {
    padding: 5,
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
