import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const TouchOpacity = props => {
    const disabled = props.disabled;
    const type = props.type;

    if(disabled) {
    	return (
    		<TouchableOpacity
    			disabled={disabled}
			    style={(type==='primary') ? [styles.primaryBtn, styles.disabledBtn] : [styles.secondaryBtn, styles.disabledBtn]}
			>
				<Text> {props.name} </Text>
			</TouchableOpacity>
    	);
    }
    if(type === 'primary') {
    	return (
    		<TouchableOpacity 
                style={styles.primaryBtn}
                onPress={props.onPress}
            >
			   	<Text> {props.name} </Text>
		    </TouchableOpacity>
    	);
    }
    if(type === 'secondary') {
    	return (
    		<TouchableOpacity 
                style={styles.secondaryBtn}
                onPress={props.onPress}
            >
			   	<Text> {props.name} </Text>
			</TouchableOpacity>
    	);
    }
    
}

export default TouchOpacity;