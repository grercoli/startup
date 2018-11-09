import React, {Component} from 'react';
import {View} from 'react-native';

export default class ExampleTwo extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#26abaf'
      }}>
        <View style={{
          width: 100,
          height: 100,
          backgroundColor: '#c42f25'
        }} />
        <View style={{
          width: 100,
          height: 100,
          backgroundColor: '#8d1cd1'
        }} />
        <View style={{
          width: 100,
          height: 100,
          backgroundColor: '#fff',
        }} />
      </View>
    );
  }
};