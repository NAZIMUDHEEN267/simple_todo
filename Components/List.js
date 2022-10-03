import React from 'react'
import { View, Text, StyleSheet } from "react-native";

function List({ text }) {
  return (
    <View style={styles.list}>
        <Text style={{textAlign: "center"}}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    list: {
        width: "100%",
        borderWidth: 2,
        borderColor: "green",
        borderRadius: 5,
        padding: 5
    }
})

export default List