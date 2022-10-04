
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import List from './List';

function Todo() {

    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");
    const [show, setShow] = useState(false);

    const add = () => {
        setTodo(arr => [...arr, text]);
        setShow(false)
    }

    return (
        <View style={styles.todo}>
            <Text style={styles.headline}>Todo List</Text>
            <ScrollView>
                {
                    todo.length ? todo.map((text, index) => <List text={text} key={String(index)} />) : <List text={"some text"} />
                }
            </ScrollView>
            <TouchableOpacity style={styles.btn} onPress={() => setShow(true)}>
                <Text style={styles.text}>New Todo</Text>
            </TouchableOpacity>

            {/* for animation */}
            <View style={show ? styles.input : {display: "none"}}>
                <Text style={styles.headline}>Enter your new Todo</Text>
                <TextInput multiline={true} numberOfLines={7} style={styles.inputField} placeholder="Type here" onChangeText={value => setText(value)} onSubmitEditing={(event) => console.log(event)}/>
                <TouchableOpacity style={styles.btn} onPress={add}>
                    <Text style={styles.text}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        width: 300,
        height: 300,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 5,
        position: "relative"
    },
    headline: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "600",
        marginBottom: 10
    },
    btn: {
        padding: 4,
        backgroundColor: "green",
        marginTop: 10
    },
    text: {
        color: "white",
        textAlign: "center",
    },
    input: {
        padding: 10,
        borderColor: "violet",
        borderWidth: 5,
        height: "160%",
        width: "120%",
        backgroundColor: "white",
        position: "relative",
        top: "-50%",
        left: "-9%",
        borderRadius: 5,
        zIndex: 5
    },
    inputField : {
        borderWidth: 2,
        borderColor: "green",
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 5
    }
})

export default Todo