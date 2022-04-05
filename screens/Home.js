import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import Card from '../shared/Card'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './ReviewForm'

const Home = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [reviews, setReviews] = useState([
       { title:'Peaky Blinders', body:'lorem ipsum', rating:4, key:1},
       { title:'Jack Reacher', body:'lorem ipsum', rating:3, key:2}
     ])

  const goToReviewDetails = (item)=>{
    navigation.navigate(
      'ReviewDetails',
      item
    )
  }

  const addReview = (review) =>{
    review.key = Math.random()
    setReviews((currentReviews)=>{
      return [review, ...currentReviews]
    })
    setModalVisible(false)
  }
  return (
    <View>
      <Modal 
        visible={modalVisible}
        animationType='slide'
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
              <MaterialIcons 
                name='close' 
                size={24} 
                onPress={()=>setModalVisible(false)}
                style={[styles.modalToggle, styles.modalClose]}
              />
              <ReviewForm addReview={addReview}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons 
        name='add' 
        size={24} 
        onPress={()=>setModalVisible(true)}
        style={styles.modalToggle}
      />
        <FlatList 
          data={reviews}
          renderItem={({item})=>(
            <TouchableOpacity
              onPress={()=>goToReviewDetails(item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  modalToggle:{
    marginBottom:10,
    borderWidth:4,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'center'
  },
  modalClose:{
    marginTop:20,
    marginBottom:0
  },
  modalContent:{
    flex:1,
    
  }
})
