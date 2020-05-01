import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import EditBioScreen from '../screens/EditBioScreen'

// MainStack
const MainStack = createStackNavigator()
const MainStacks = (props) => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={props.HomeTabs}
        options={{ headerShown: false }}
      />
      <MainStack.Screen 
        name="EditBioScreen" 
        component={EditBioScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  )
}

export default MainStacks