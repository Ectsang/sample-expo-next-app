import React from 'react';
import { SafeAreaView, View, Button, Text } from "react-native";

const ProfileScreen = ({navigation}) => {

  return (
    <SafeAreaView>
      <View>
        <Text>Profile Page :)</Text>
        <Button title="Edit Bio" onPress={()=>{navigation.navigate('EditBioScreen')}}>Edit Bio</Button>
      </View>
    </SafeAreaView>
  );
}

ProfileScreen.navigationOptions = {
  title: 'Profile'
}
ProfileScreen.path = 'profile'

export default ProfileScreen

