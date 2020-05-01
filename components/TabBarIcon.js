import { Ionicons } from 'react-native-vector-icons'
import * as React from 'react'

const tintColor = '#2f95dc'
const Colors = {
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
}

export default function TabBarIcon(props) {
  switch (props.screen) {
    case 'ProfileScreen':
      return (
        <Ionicons
          name={props.name}
          size={30}
          style={{ marginBottom: -3 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      )  
    default:
      return (
        <Ionicons
          name={props.name}
          size={30}
          style={{ marginBottom: -3 }}
          color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      )
  }
}
