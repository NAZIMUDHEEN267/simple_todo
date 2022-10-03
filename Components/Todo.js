
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import List from './List';

function Todo() {

    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");

  return (
    <View style={styles.todo}>
        <Text style={styles.headline}>Todo List</Text>
        <ScrollView>
            {
                todo.length ? todo.map((text,index) => <List text={text} key={String(index)}/>) : <List text="Some Todo"/>
            }
        </ScrollView>
        <TextInput style={{borderWidth: 2, borderColor: "blue", paddingLeft: 10}} placeholder="Type here" onChange={(text) => setText(text)}>
        </TextInput>
        <TouchableOpacity style={styles.btn} onPress={() => null}>
            <Text style={{color: "white", textAlign: "center"}}>New Todo</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    todo: {
        width: "60%",
        height: 300,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 5
    },
    headline: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "600",
        marginBottom: 10
    },
    btn: {
        padding: 4,
        backgroundColor: "red",
    }
})

export default Todo