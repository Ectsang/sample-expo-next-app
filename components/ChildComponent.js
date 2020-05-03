import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRouting } from 'expo-next-react-navigation'

const ChildComponent = () => {
  const { navigate } = useRouting()

  return (
    <View>
      <Text>This is a child component</Text>
      <Button
        title='open sesame'
        onPress={() => {
            navigate({
              routeName: 'other',
              params: { id: 'bbb', name: 'Natasha' }
            })}}
      />
    </View>
  )
}

export default ChildComponent

const styles = StyleSheet.create({})
