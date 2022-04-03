/*************************** 
CONCEPTS IN THIS LEVEL:
_____________________________

Alert
Flex
Icons
Keyboard
TouchableWithoutFeedback
________________________________
******************************/

import React, {useState} from 'react'
import { StyleSheet, View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import Header from './screens/Header'
import TodoItem from './screens/TodoItem'
import AddTodo from './screens/AddTodo'

export default function App() { 

  const [todos, setTodos] = useState([
    { text:'learn react native' , id:1 },
    { text: 'learn NFT', id:2 } 
  ])

  const deleteTodo = (id)=>{
    setTodos((prevTodos)=>{
      return (
        prevTodos.filter((todo)=> todo.id !=id)
      )
    })
  }

  const addNewTodo = (newTodo)=>{
    setTodos((prevTodos)=>{
      return [
        ...prevTodos,
        newTodo
      ]
    })
  }
  
  return (
  <TouchableWithoutFeedback
    onPress={Keyboard.dismiss()}
  >
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo 
          addNewTodo={addNewTodo}
        />
        <View style={styles.list}>
          <TodoItem todos={todos} 
            deleteTodo={deleteTodo}
          />
        </View>
      </View>

    </View>
  </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    padding:40
  },
  list:{
    flex:1,
    marginTop:20
  },
})
