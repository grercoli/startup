import React from 'react';
import { Text, TextInput } from 'react-native';

const AppTextInput = props => {
    
    return (
      <TextInput
        style={{height: 40, width: '50%'}}
        placeholder={props.placeholder}
        secureTextEntry={(props.type) ? true : false}
      />
    );
}

export default AppTextInput;