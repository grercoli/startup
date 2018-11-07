import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

export default class Exercise extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextInput
            style={{height: 40}}
            placeholder="Write something!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text}
          </Text>
        </View>
      </View>
    );
  }
}