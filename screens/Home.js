import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import Card from '../shared/Card'
import {MaterialIcons} from '@expo/vector-icons'

const Home = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false)

  const reviews = [
    { title:'Peaky Blinders', body:'lorem ipsum', rating:4, key:1},
    { title:'Jack Reacher', body:'lorem ipsum', rating:3, key:2}
  ]
  const goToReviewDetails = (item)=>{
    navigation.navigate(
      'ReviewDetails',
      item
    )
  }

  return (
    <View>
      <Modal 
        visible={modalVisible}
        animationType='slide'
      >
        <View style={StyleSheet.modalContent}>
            <MaterialIcons 
              name='close' 
              size={24} 
              onPress={()=>setModalVisible(false)}
              style={[styles.modalToggle, styles.modalClose]}
            />
          <Text>
            Hello from the modal
          </Text>
        </View>
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
  }
})
