import React from 'react'
import HomeScreen from './components/HomeScreen'
import PetInfoScreen from './components/PetInfoScreen'
import PetScheduleScreen from './components/PetScheduleScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'


const RootStack = createStackNavigator (
  {
    Home: HomeScreen,
    PetInfoPage: PetInfoScreen,
    PetSchedulePage: PetScheduleScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(RootStack)

