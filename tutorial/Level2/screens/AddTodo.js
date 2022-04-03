import { StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'

const AddTodo = (props) => {
    const [newTodoText, setNewTodoText]=useState('')
  
    const changeNewTodoText = (newText)=>{
        setNewTodoText(newText)
    }

    const addTodo = ()=>{
      if(newTodoText.length >=1){
        props.addNewTodo({text:newTodoText, id:Math.random()})
      }else{
        console.log('Hello')
        Alert.alert('OOPS!', 'Todos must be atleast 1 char long.', [
          {text:'Understood', onPress: ()=> console.log('Alert Closed')}
        ])
      }
    }
  return (
    <View>
        <TextInput
            style={styles.input}
            placeholder='add new todo...'
            onChangeText={changeNewTodoText}
        />

        <Button 
          onPress={addTodo}
          title='add todo'
          color='coral'
        />
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  input:{
    marginBottom:10,
    paddingHorizontal:8,
    paddingVertical:6,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
  },

})