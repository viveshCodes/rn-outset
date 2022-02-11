import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}> You had me at hello</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
        <Text style={styles.boldText}> Lorem ipsum dolor <Text>Inherit</Text> sit amet, consectetur adipiscing elit. </Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
      </View>
      <StatusBar style="auto" />
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
  header:{
    backgroundColor:'pink',
    padding:20
  },
  boldText:{
    fontWeight:'bold'
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
    fontWeight: 'bold'
  }
});
