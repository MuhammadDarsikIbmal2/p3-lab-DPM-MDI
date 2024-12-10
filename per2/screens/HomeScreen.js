import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Item from '../components/Item';

const HomeScreen = () => {
  const [items, setItems] = useState([]);

  // Lifecycle methods
  useEffect(() => {
    console.log('Component mounted');

    // Simulate fetching data
    setTimeout(() => {
      setItems(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));
    }, 1000);

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {items.map((item, index) => (
          <Item key={index} title={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  scrollContainer: {
    padding: 10,
  },
});

export default HomeScreen;
