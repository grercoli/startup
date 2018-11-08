import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import AppTextInput from './AppTextInput';
import TouchOpacity from './TouchOpacity';

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
        <View style={styles.alternative}>
          <TextInput
            ref={input => { this.textInput = input }}
            style={{height: 40, width: '50%'}}
            placeholder="Write something!"
            onChangeText={(text) => this.setState({text})}
          />
          
          <TouchableOpacity
            style={styles.button}
            onPress={this.clearInput}
          >
            <Text> Clear Input </Text>
          </TouchableOpacity>
        </View>
        
        <View>
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text}
          </Text>
        </View>

        <View>
          <AppTextInput placeholder='Your username'/>
          <AppTextInput type='true' placeholder='Your password'/>
        </View>

        <View>
          <TouchOpacity type='primary' name='CONTINUE' />
          <TouchOpacity type='secondary' name='SIGN UP' />
          <TouchOpacity type='secondary' name='CONTINUE' disabled={true} />
        </View>

      </View>
    );
  }
}