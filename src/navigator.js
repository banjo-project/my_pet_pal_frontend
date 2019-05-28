import React, { Component } from 'react'
import HomeScreen from './components/HomeScreen'
import PetInfoScreen from './components/PetInfoScreen'
import PetScheduleScreen from './components/PetScheduleScreen'
import PetPhotoScreen from './components/PetPhotoScreen'
import AddHumanScreen from './components/AddHumanScreen'
import LogInScreen from './components/LogInScreen'
import ManageHumanScreen from './components/ManageHumanScreen'
import DailyScheduleScreen from './components/DailyScheduleScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'


const RootStack = createStackNavigator (
  {
    Home: HomeScreen,
    PetInfoPage: PetInfoScreen,
    PetSchedulePage: PetScheduleScreen,
    PetPhotoPage: PetPhotoScreen,
    AddHumanPage: AddHumanScreen,
    ManageHumanPage: ManageHumanScreen,
    LogInPage: LogInScreen,
    DailySchedulePage: DailyScheduleScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default Navigator = createAppContainer(RootStack)

