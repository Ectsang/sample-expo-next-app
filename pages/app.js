import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabs from '../navigation/BottomTabNavigator'
import MainStacks from '../navigation/MainStackNavigator'

import { useRouting } from 'expo-next-react-navigation'

const HomeTabs = () => {
  const { getParam } = useRouting()
  const initialRouteName = getParam('initialRouteName')
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

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}