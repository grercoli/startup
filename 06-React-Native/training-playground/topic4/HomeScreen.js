import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import TouchOpacity from './TouchOpacity';
import DetailsScreen from './DetailsScreen';
import Posts from './Posts';
import Post from './Post';
import Picture from './Picture';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Forms Screen</Text>
        <TouchOpacity type='secondary' name='NEXT' onPress={() => this.props.navigation.navigate('Posts')}/>
      </View>
    );
  }
}

const FormStack = createStackNavigator({
  Forms: HomeScreen,
  Posts: Posts,
  Post: Post
});

const CameraStack = createStackNavigator({
  Camera: DetailsScreen,
  Picture: Posts
});

export default createBottomTabNavigator({
  Forms: FormStack,
  Camera: CameraStack,
},{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Forms') {
          iconName = 'ios-list';
        } else if (routeName === 'Camera') {
          iconName = 'md-camera';
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
  	}
});