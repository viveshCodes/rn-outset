import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'

const CustomHeader = ({navigation, title}) => {

  const openDrawer = ()=>{
    navigation.openDrawer()
  }
  return (
    <ImageBackground source={require('../assets/movie_bg.png')} style={styles.header}>
      <MaterialIcons 
        name='menu' 
        size={28} 
        onPress={openDrawer}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  header:{
    height:'100%',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
  },
  icon:{
    position:'absolute',
    left:15
  },
  headerText:{
    fontWeight:'bold',
    fontSize:20,
    color:'#333',
    letterSpacing:1
  },
  headerImage:{
    marginHorizontal:10,
    height:26,
    width:26
  },
  headerTitle:{
    flexDirection:'row'
  }
})