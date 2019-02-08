import React from 'react';
import HomeScreen from './components/HomeScreen'
import DetailsScreen from './components/DetailsScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'; 


const RootStack = createStackNavigator (
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(RootStack);

