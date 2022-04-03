/*************************** 
CONCEPTS IN THIS FILE:
_____________________________

Button
FlatList
ScrollView
Text
TextInput
TouchableOpacity
View
________________________________
******************************/
import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, 
  TextInput, ScrollView, FlatList,
  TouchableOpacity
} from 'react-native';

export default function App() {
  const [name, setName] = useState('Jerry Maguire')
  const [age, setAge]= useState('31')
  const [greeting, setGreeting]= useState('Namaste!')
  const [persons, setPersons] = useState([
    {name:'Jack', id:1},
    {name:'Ethan', id:2},
    {name:'Jerry', id:3},
    {name:'Knight', id:4},
    {name:'Bale', id:5},
  ])

  const updateName = (name)=>{
    setName(name)
  }

  const updateAge = (val)=>{
    setAge(val)

  }

  const updateGreeting = ()=>{
    setGreeting('Hare Krishna!')
  }

  const pressHandler = (id)=>{
    setPersons((prevPersons)=>{
      return(
        prevPersons.filter((person)=> person.id !=id)
      )
    })
  }

  return (
  
    <View style={styles.container}>
      
      <Text>{greeting}</Text>
      
      <View style={styles.container}> 
          <Text>Bio:</Text>

          <Text>Name is: {name}</Text>
          <TextInput 
            placeholder='Enter name'
            onChangeText={(val)=> updateName(val)}
            style={styles.input}
          />

          <Text>Age is: {age}</Text>
          <TextInput 
            keyboardType='numeric'
            placeholder='Enter age'
            onChangeText={(val)=> updateAge(val)}
            style={styles.input}
          />
      </View>
      

      <View style={styles.buttonContainer}>
        <Button title='update greeting' onPress={updateGreeting}/>
      </View>

      <ScrollView>
        {persons && persons.map(person =>(
            <View key={person.id}>
              <Text style={styles.item}>
                {person.name}
              </Text>
            </View>
        ))
        }
      </ScrollView>

      <FlatList 
        keyExtractor={(item)=> (
          item.id
        )}
        numColumns={3}
        data={persons}
        renderItem={({item})=>(
         <TouchableOpacity onPress={()=>pressHandler(item.id)}>
            <Text style={styles.item}>
              {item.name}
            </Text>
         </TouchableOpacity>
          
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer:{
    marginTop:20
  },

  input:{
    borderWidth:1,
    borderColor:'#777',
    margin:10,
    width:200,
    padding:8
  },
  item:{
    backgroundColor:'pink',
    margin:24,
    padding:10,
    fontSize:24
  } 
});
