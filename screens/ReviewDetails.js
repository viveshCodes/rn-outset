import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../shared/Card'
import { globalImages } from '../styles/GlobalImages'

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
        <View style={styles.rating}>
          <Text>Rating:</Text>
          <Image style={styles.image} source={globalImages.ratings[rating]} />
        </View>
      </Card>
      <Button title='Go Home' onPress={goToHome} />
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
  image: {
        maxWidth: 100,
        minWidth:50,
        height: 'auto',
        resizeMode: 'contain'
    },
    rating:{
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:16,
      marginTop:16,
      borderTopWidth:1,
      borderTopColor:'#eee'
    }
})