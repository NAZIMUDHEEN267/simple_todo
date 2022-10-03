import { StyleSheet, View, Text } from "react-native";
import Todo from "./Components/Todo";

export default function App () {
  return (
      <View style={styles.body}>
        <Todo />
      </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "steelblue"
  }
})
