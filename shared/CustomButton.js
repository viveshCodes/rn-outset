import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({text, onPress}) => {
  return (
      <TouchableOpacity
        onPress={onPress}
      >
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#f01d71'
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center',
        fontSize:16
    }
})