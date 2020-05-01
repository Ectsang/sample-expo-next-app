import React, { useState } from 'react'
import { SafeAreaView, TextInput, Button, Text } from 'react-native'

const EditBioScreen = ({navigation}) => {
  const [name, setName] = useState(null)
  return (
    <SafeAreaView>
      <Text>Edit bio</Text>  
      <TextInput
        placeholder='Your name'
        value={name}
        onChangeText={nextValue => setName(nextValue)}
      />
      <Button
        title="Go back"
        onPress={()=>{navigation.goBack()}}
      >
        Go Back
      </Button>
    </SafeAreaView>
  )

}

export default EditBioScreen

