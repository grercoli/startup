import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TouchOpacity from './TouchOpacity';

class Forms3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to Form 3</Text>
        <TouchOpacity type='secondary' name='FINISH' onPress={() => this.props.navigation.navigate('Forms')}/>
      </View>
    );
  }
}

export default Forms3;