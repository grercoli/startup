import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import TouchOpacity from './TouchOpacity';
import DetailsScreen from './DetailsScreen';
import Posts from './Posts';
import Post from './Post';

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

export default createBottomTabNavigator({
  Forms: FormStack,
  Other: DetailsScreen,
},{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Forms') {
          iconName = 'ios-list';
        } else if (routeName === 'Other') {
          iconName = 'md-information-circle';
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