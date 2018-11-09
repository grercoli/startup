import React, {Component} from 'react';
import {View} from 'react-native';

export default class ExampleFour extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 20,
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
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          alignSelf: 'center',
          backgroundColor: '#8d1cd1'
        }} />
        <View style={{
          width: 100,
          height: 100,
          alignSelf: 'flex-end',
          backgroundColor: '#fff'
        }} />
      </View>
    );
  }
};