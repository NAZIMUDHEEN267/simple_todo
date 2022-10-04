import React from 'react'
import { View, Text } from "react-native";

function List({ text, todoItem }) {
  return (
    <View style={styles.todoItem}>
      <Text style={{ textAlign: "center" }}>{text}</Text>
    </View>
  )
}

const styles = {
  todoItem: {
    width: "100%",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 5,
    padding: 5,
    marginBottom: 5
  }
}

export default List