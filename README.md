# sample-expo-next-app

`Purpose:`

Combining nextjs goodness with expo. Nextjs for statically generated (web)pages and re-using 100% of Expo's code for the app itself (react-navigation, components, screens etc)

Specifically, we want to have this architecture...

1. a landing page (or two) for "marketing" purposes, use next's default pre-render capability

2. a mobile app in React Native, using expo's managed flow

3. Re-use navigation, screens and components `100%` across both expo and next!

To demo the above requirements, we're going to put 2 screens in a BottomTabNavigator and put this BottomTabNavigator with another screen in a StackNavigator. Then put the StackNavigator in a NavigationContainer, and set up this app entry page for both mobile (expo) and web (next).

We'll use `expo-next-react-navigation` and static navigation properties along the way to link directly into the web app (i.e. you can share a url directed at a non-default tab, http://[your-next-app]/featured and use Link from `expo-next-react-navigation` to jump straight into a specific Tab in your web app.)

# Let's GO!

```
$ which expo

/Users/eric/.nvm/versions/node/v10.13.0/bin/expo


$ expo —version

3.19.2


$ expo init sample-expo-next-app

? Choose a template: `expo-template-blank`


# Sanity check: Scan QR code on iPhone / Android to ensure it runs 

$ yarn start
```

## Follow directions on https://docs.expo.io/guides/using-nextjs/


#### Use the awesomeness of next-adapter (thanks to the kickass expo team!)
`$ yarn add -D @expo/next-adapter`

#### Run this to make code changes to your project 
`$ yarn next-repo`

#### Ensure next app loads in http://localhost:3000/
`$ yarn next dev`

#### Add image, font and plugin support for next
`$ yarn add next-images next-fonts next-transpile-modules next-compose-plugins`

#### Add `expo-next-react-navigation`, at time of writing: 1.1.6 (thanks to [@nandorojo](https://github.com/nandorojo))
`$ yarn add expo-next-react-navigation@v5`

#### Add `react-navigation` v5 or later (v5 had a load of breaking changes from v4)
`$ yarn add @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack`

#### Install the following with expo to ensure compatibility (at time of writing: Expo SDK37)
`$ expo install react-native-safe-area-context react-native-screens react-native-vector-icons react-native-gesture-handler @react-native-community/masked-view`


## Your `package.json` may look like this:
```
{
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject",
    "build": "next build"
  },
  "dependencies": {
    "@react-native-community/masked-view": "0.1.6",
    "@react-navigation/bottom-tabs": "^5.3.1",
    "@react-navigation/stack": "^5.2.16",
    "expo": "~37.0.3",
    "expo-next-react-navigation": "^1.1.6",
    "next": "^9.3.6",
    "next-compose-plugins": "^2.2.0",
    "next-fonts": "^1.1.0",
    "next-images": "^1.4.0",
    "next-transpile-modules": "^3.3.0",
    "react": "~16.9.0",
    "react-dom": "~16.9.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-37.0.1.tar.gz",
    "react-native-gesture-handler": "~1.6.0",
    "react-native-safe-area-context": "0.7.3",
    "react-native-screens": "~2.2.0",
    "react-native-vector-icons": "^6.6.0",
    "react-native-web": "~0.11.7"
  },
  "devDependencies": {
    "@babel/core": "^7.8.6",
    "@expo/next-adapter": "^2.1.3",
    "babel-preset-expo": "~8.1.0"
  },
  "private": true
}
```

## Change next.config.js to:
```
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withImages = require('next-images')
const withTM = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ['expo-next-react-navigation'],
      },
    ],
    withFonts,
    withImages,
    [withExpo, { projectRoot: __dirname }],
  ],
  {
    // ...
  }
)
```

# Now, set up rest of files (copy from this repo).

- `App.js` (entry for your expo app)
- `assets` (for your images etc)
- `components` (keep react non-screen, not-navigation components here)
- `navigation` (keep navigation components here)
- `pages` (the special next js directory)
- `screens` (the screens components go here)

## Change `App.js` to
```
import * as React from 'react'
import { AppNavigator } from './navigation/Navigation'

export default function App() {
  return (
    <AppNavigator/>
  )
}
```

### Change `pages/index.js` to
```
import React from 'react'
import { Text, Button, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { Link } from 'expo-next-react-navigation'

export default function App() {
  return (
      <NavigationContainer>
        <View>
          <Text>Welcome to Index (landing) Page</Text>
          
          <Link routeName="app" params={{ initialRouteName: 'Other', key: 'blah'}} web={{ as: '.'}}>
            <Button 
            style={{ userSelect:'none' }}
            onPress={() => {console.log("pressed")}}
            title="Go to App"></Button>
          </Link>
        </View>
      </NavigationContainer>
  )
}
```

### Add the rest of the files for the demo
- `pages/app.js`
- `navigation/BottomTabNavigator.js`
- `navigation/MainStackNavigator.js`
- `navigation/Navigation.js`
- `screens/ProfileScreen.js`
- `screens/OtherScreen.js`
- `screens/EditBioScreen.js`
- `components/TabBarIcon.js`

# Run
- `yarn next dev` (View your Next app on web browser)
- `expo start` (View your Expo app on mobile)
