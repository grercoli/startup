import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardTwo = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin urna sed nibh posuere, non egestas neque rhoncus. Phasellus pharetra vestibulum facilisis. Ut id turpis mi.
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 400,
    padding: 10,
    backgroundColor: 'blue'
  },
  textStyle: {
    color: '#fff'
  }
});

export default CardTwo;