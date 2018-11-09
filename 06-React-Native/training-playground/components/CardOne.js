import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardOne = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.baseText}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin urna sed nibh posuere, non egestas neque rhoncus. Phasellus pharetra vestibulum facilisis. Ut id turpis mi.
				<Text style={styles.endText}>
				Duis fringilla mauris justo, in finibus lorem euismod eget. Vivamus pellentesque mauris mauris, sit amet accumsan enim auctor eu. Praesent consectetur volutpat vestibulum. Nunc vel sollicitudin nisi, non vulputate mi. 
				</Text>
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
  },
  baseText: {
  	fontSize: 14
  },
  endText: {
  	fontWeight: 'bold',
  	fontSize: 20,
  	color: '#FFF'
  }
});

export default CardOne;