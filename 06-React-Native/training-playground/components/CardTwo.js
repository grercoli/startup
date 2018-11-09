import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CardTwo = () => {
	return (
		<View style={styles.container}>
			<Image
          style={{width: 400, height: 150}}
          source={require('../assets/venom.jpg')}
      />
      <Image
          style={{width: 400, height: 150}}
          source={{uri: 'https://cinepremiere.com.mx/assets/images/noticias/2016/04-abril/Marvel-toma-control-creativo-de-Spider-Man-Homecoming.jpg'}}
      />
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 400,
    backgroundColor: 'blue'
  }
});

export default CardTwo;