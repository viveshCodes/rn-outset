import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../shared/Card'

const ReviewDetails = ({route, navigation}) => {

  // Collect all the data passed to ReviewDetails screen
  const {title, body, rating} = route.params

  const goToHome = ()=>{
    navigation.navigate('Landing')
  } 
  return (
    <View>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{rating}</Text>
      </Card>
      <Button title='Go Home' onPress={goToHome} />
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({})