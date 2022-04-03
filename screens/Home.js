import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'

const Home = ({navigation}) => {

  const reviews = [
    { title:'Peaky Blinders', body:'lorem ipsum', rating:9, key:1},
    { title:'Jack Reacher', body:'lorem ipsum', rating:8, key:2}
  ]
  const goToReviewDetails = (item)=>{
    navigation.navigate(
      'ReviewDetails',
      item
    )
  }
  return (
    <View>
      <Text style={globalStyles.titleText}>Home</Text>
        <FlatList 
          data={reviews}
          renderItem={({item})=>(
            <TouchableOpacity
              onPress={()=>goToReviewDetails(item)}
            >
              <Text style={styles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})