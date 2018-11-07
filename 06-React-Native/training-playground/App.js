import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardOne from './components/CardOne';
import CardTwo from './components/CardTwo';
import CardThree from './components/CardThree';
import CardFour from './components/CardFour';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
