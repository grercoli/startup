import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CardThree = () => {
	return (
		<View style={styles.container}>
			<Image
          style={{width: 350, height: 300}}
          source={require('../assets/venom.jpg')}
      />
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 350,
    backgroundColor: '#F00'
  }
});

export default CardThree;