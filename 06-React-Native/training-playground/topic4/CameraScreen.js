import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

class CameraScreen extends React.Component {
	state = {
		hasCameraPermission: null,
	    type: Camera.Constants.Type.back,
	};

  	async componentDidMount() {
    	const { status } = await Permissions.askAsync(Permissions.CAMERA);
    	this.setState({ hasCameraPermission: status === 'granted' });
  	}

    flipCamera = () => {
      this.setState({
        type: this.state.type === Camera.Constants.Type.back
	      ? Camera.Constants.Type.front
	      : Camera.Constants.Type.back,
	    });
  	}

  	takePicture = () => {
	    if (this.camera) {
	      
	    	this.camera.takePictureAsync()
	        .then((photo) => {
	          this.props.navigation.navigate('Gallery', {picture: photo})
	        })
	        .catch((error) => {
	          console.error(error);
	        }); 
    	}
  	}

  	render() {
    	const { hasCameraPermission } = this.state;
    	if (hasCameraPermission === null) {
      		return <View />;
    	} else if (hasCameraPermission === false) {
      		return <Text>No access to camera</Text>;
    	} else {
      		return (
        		<View style={{ flex: 1 }}>
          			<Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }} >
            			<View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }} >
              				<TouchableOpacity onPress={this.flipCamera} >
                				<Text style={{ fontSize: 18, marginTop: 10, color: 'white' }} >
                  					{' '}Flip{' '}
                				</Text>
              				</TouchableOpacity>
              				<TouchableOpacity onPress={this.takePicture} >
                				<Text style={{ fontSize: 18, marginTop: 10, color: 'white' }} >
                  					{' '}Take Picture{' '}
                				</Text>
              				</TouchableOpacity>
            			</View>
          			</Camera>
        		</View>
      		);
    	}
  	}
}

export default CameraScreen;