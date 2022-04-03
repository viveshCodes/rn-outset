import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReviewDetails = ({route, navigation}) => {

  // Collect all the data passed to ReviewDetails screen
  const {title, body, rating} = route.params

  const goToHome = ()=>{
    navigation.navigate('Home')
  } 
  return (
    <View>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
      <Button title='Go Home' onPress={goToHome} />
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({})