import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStack from './HomeStack'
import AboutStack from './AboutStack'

const Drawer = createDrawerNavigator()
const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name='Home'
        component={HomeStack}
      />
      <Drawer.Screen 
        name='About'
        component={AboutStack}
      />
    </Drawer.Navigator>
  )
}

export default HomeDrawer

const styles = StyleSheet.create({})