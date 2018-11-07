import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item1} />
        <View style={styles.item2} />
        <View style={styles.item3} />
      </View>
    );
  }
};