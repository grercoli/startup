import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ExerciseSeven from './topic2/ExerciseSeven';
import styles from './topic2/styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ExerciseSeven />
      </View>
    );
  }
}
