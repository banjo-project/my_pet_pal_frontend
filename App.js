import React from 'react';
import HomeScreen from './components/HomeScreen'
import PetInfoScreen from './components/PetInfoScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'; 


const RootStack = createStackNavigator (
  {
    Home: HomeScreen,
    PetInfoPage: PetInfoScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(RootStack);

