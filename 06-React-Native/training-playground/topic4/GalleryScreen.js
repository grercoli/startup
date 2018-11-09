import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TouchOpacity from './TouchOpacity';

class GalleryScreen extends React.Component {
	//In real project i will put all styles in a style file, thats the reason i put them inline
	render() {
		const picture = this.props.navigation.getParam('picture', 'no photo');
	  	return (
	    	<View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        		<View style={{flex: 0.75, height: '100%', width: '100%'}}>
        			<Image
        		style={{height: '100%', width: '100%'}} 
        		source={{uri: picture.uri}}
        		/>
        		</View>
        		
        		<View style={{flex: 0.25, height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        			<TouchOpacity type='primary' name='GO BACK' onPress={() => this.props.navigation.goBack()} />
        		</View>
      		</View>
	  	);
  	}
}

export default GalleryScreen;