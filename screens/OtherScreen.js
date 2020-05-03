import * as React from 'react'
import { SafeAreaView, Button, Text, View } from 'react-native'
import { Link, useRouting } from 'expo-next-react-navigation'

export function OtherScreen({navigation}) {
  const { getParam } = useRouting()
  const id = getParam('id')
  const name = getParam('name')
  console.log(id, name)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
        (navigation !== undefined) ?
        <Text>Expo only element</Text> :
        <View>
          <Text>Next only element</Text>
          <Link routeName="app" params={{ initialRouteName: '', key: 'blah'}} web={{ as: '.'}}>
            <Button 
            style={{ userSelect:'none' }}
            onPress={() => {console.log("pressed")}}
            title="App Home"></Button>
          </Link>
        </View>
      }
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Other Screen</Text>
      </View>
    </SafeAreaView>

  )
}

OtherScreen.navigationOptions = {
  title: 'Other'
}
OtherScreen.path = 'other'