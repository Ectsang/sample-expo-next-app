import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabs from '../navigation/BottomTabNavigator'
import MainStacks from '../navigation/MainStackNavigator'

const HomeTabs = () => {
 
  const initialRouteName = 'Profile'
  console.log('initialRouteName', initialRouteName)
  return (
    <BottomTabs initialRouteName={initialRouteName} />
  )
}

const Main = () => {
  return (
    <MainStacks HomeTabs={HomeTabs} />
  )
}

export const AppNavigator = () => (
  <NavigationContainer>
    <Main />
  </NavigationContainer>
)