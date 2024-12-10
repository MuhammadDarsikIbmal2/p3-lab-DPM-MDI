import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#03dac6',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
});

export default Item;
