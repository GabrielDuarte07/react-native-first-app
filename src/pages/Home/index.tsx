import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121214',
  },
  title: {
    color: '#f1f1f1',
  },
});

export default Home;
