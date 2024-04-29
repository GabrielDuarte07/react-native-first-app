import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';

const Home = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
        <TextInput style={styles.textInput} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    marginTop: 30,
    borderRadius: 7,
    padding: Platform.OS === 'ios' ? 15 : 12,
  },
});

export default Home;
