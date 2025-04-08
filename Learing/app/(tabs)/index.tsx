import { View, Text, StyleSheet } from "react-native"

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >coffey Shope</Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 42,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
})