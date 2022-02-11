import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Jerry Maguire')
  const [age, setAge]= useState('31')
  const [greeting, setGreeting]= useState('Namaste!')

  const updateName = (name)=>{
    setName(name)
  }

  const updateAge = (val)=>{
    setAge(val)

  }

  const updateGreeting = ()=>{
    setGreeting('Hare Krishna!')
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
  }
});
