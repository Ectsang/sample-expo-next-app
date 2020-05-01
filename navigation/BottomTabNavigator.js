import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ProfileScreen from '../screens/ProfileScreen'
import { OtherScreen } from '../screens/OtherScreen'

const BottomTab = createBottomTabNavigator()

const BottomTabs = (props) => {

  return (
    <BottomTab.Navigator
      initialRouteName={props.initialRouteName}
      
      backBehavior='initialRoute'
      
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
      
      />
      <BottomTab.Screen
        name="Other"
        component={OtherScreen}
      
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabs
