import React, {Component} from 'react';
import {View, Platform} from 'react-native';

export default class ExampleFive extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        ...Platform.select({
          ios: {
            backgroundColor: 'grey',
          },
          android: {
            backgroundColor: 'green',
          },
        }),
      }}>
      </View>
    );
  }
};