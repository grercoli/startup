import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardOne = () => {
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
    height: 200,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    backgroundColor: '#F00'
  }
});

export default CardOne;