import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'

const CustomHeader = ({navigation}) => {

  const openDrawer = ()=>{
    navigation.openDrawer()
  }
  return (
    <View style={styles.header}>
      <MaterialIcons 
        name='menu' 
        size={28} 
        onPress={openDrawer}
        style={styles.icon}
      />
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  header:{
    height:'100%',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  icon:{
    left:15
  }
})