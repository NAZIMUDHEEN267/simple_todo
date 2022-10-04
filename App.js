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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: "steelblue"
  }
})
