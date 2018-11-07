import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardThree = () => {
	return (
		<View style={styles.container}>
			<Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin urna sed nibh posuere, non egestas neque rhoncus. Phasellus pharetra vestibulum facilisis. Ut id turpis mi. Duis fringilla mauris justo, in finibus lorem euismod eget. Vivamus pellentesque mauris mauris, sit amet accumsan enim auctor eu. Praesent consectetur volutpat vestibulum. Nunc vel sollicitudin nisi, non vulputate mi. 
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 350,
    padding: 10,
    backgroundColor: '#F00'
  }
});

export default CardThree;