import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Exercise extends Component {
  state = {
    text: ''
  }

  clearInput = () => {
    this.textInput.clear();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextInput
            ref={input => { this.textInput = input }}
            style={{height: 40}}
            placeholder="Write something!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text}
          </Text>
        </View>
        <TouchableOpacity
         style={styles.button}
         onPress={this.clearInput}
       >
          <Text> Clear Input </Text>
       </TouchableOpacity>
      </View>
    );
  }
}