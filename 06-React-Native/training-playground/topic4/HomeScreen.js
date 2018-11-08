import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import DetailsScreen from './DetailsScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: { screen: HomeScreen },
  DetailsScreen: { screen: DetailsScreen },
});