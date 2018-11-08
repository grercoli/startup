import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TouchOpacity from './TouchOpacity';

class Forms2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to Form 2</Text>
        <TouchOpacity type='secondary' name='NEXT' onPress={() => this.props.navigation.navigate('Forms3')}/>
      </View>
    );
  }
}

export default Forms2;