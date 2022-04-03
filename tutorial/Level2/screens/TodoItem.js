import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = (props) => {
const todos = props.todos
const deleteTodo = props.deleteTodo
return (
<View>
    <FlatList 
        keyExtractor={(item)=> (
            item.id
        )}
        data={todos}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>deleteTodo(item.id)}>
                <View style={styles.todo}>
                    <MaterialIcons name="delete" size={24} color="black" />
                    <Text style={styles.todoText}>
                        {item.text}
                    </Text>
                </View>
            
            </TouchableOpacity>
        )}
    />
</View>
)
}

export default TodoItem

const styles = StyleSheet.create({
    todo:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        alignItems:'center',
        flexDirection:'row'
    },
    todoText:{
        marginLeft:10
    }
})