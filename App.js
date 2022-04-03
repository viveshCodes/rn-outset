/*____________IMPORT STARTS_________*/ 
// React and React Native
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Expo
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'

// Routes
import HomeDrawer from './routes/HomeDrawer'
/*________________IMPORT ENDS_______________________*/ 

const App = () => {
  const [fontsLoaded] = useFonts({
    'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
  })

  if(!fontsLoaded){
    return(
      <AppLoading />
    )
  }

  return (
    <NavigationContainer>
      <HomeDrawer />
    </NavigationContainer>
  )

}

export default App
