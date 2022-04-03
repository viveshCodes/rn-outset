import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import CustomHeader from '../shared/CustomHeader'
import { ImageBackground, StyleSheet } from 'react-native'

const Stack = createStackNavigator()

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerShown:true,
          headerTintColor:'#444',
          headerStyle:{
            backgroundColor:'#eee',
            height:60
          }, 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
      }
    >
        <Stack.Screen 
        name='Landing'
        component={Home}
        options={{
          headerTitle:'',
          header:()=> <CustomHeader navigation={navigation} title='MovieZone' />,
        }}
        />
        <Stack.Screen 
        name='ReviewDetails'
        component={ReviewDetails}
        />
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({
  headerBg:{
    height:50,
    width:'100%'
  }
})
