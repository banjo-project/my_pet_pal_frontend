import React from 'react'
import HomeScreen from './components/HomeScreen'
import PetInfoScreen from './components/PetInfoScreen'
import PetScheduleScreen from './components/PetScheduleScreen'
import PetPhotoScreen from './components/PetPhotoScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'


const RootStack = createStackNavigator (
  {
    Home: HomeScreen,
    PetInfoPage: PetInfoScreen,
    PetSchedulePage: PetScheduleScreen,
    PetPhotoPage: PetPhotoScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(RootStack)

