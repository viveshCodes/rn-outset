import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Jerry Maguire')

  const updateName = ()=>{
    setName('Vivesh')
  }
  return (
    <View style={styles.container}>
    
      <View style={styles.body}>
        <Text>My name is {name}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title='update name' onPress={updateName}/>
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
  }
});
