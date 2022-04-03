import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import About from '../screens/About'
import CustomHeader from '../shared/CustomHeader'

const Stack = createStackNavigator()

const AboutStack = ({navigation}) => {
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
        name='About'
        component={About}
        options={{
          headerTitle:'',
          header:()=> <CustomHeader navigation={navigation} title='About'/>,
        }}
        />
    </Stack.Navigator>
  )
}

export default AboutStack
