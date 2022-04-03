import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import CustomHeader from '../shared/CustomHeader'

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
        name='Home'
        component={Home}
        options={{
          headerTitle:'Movie Zone',
          headerLeft:()=> <CustomHeader navigation={navigation} />,
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
