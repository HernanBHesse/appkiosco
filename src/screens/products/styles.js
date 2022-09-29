import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    marginVertical: 20,
    fontFamily: "LBold",
    fontSize: 30,
  },
  primaryContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  secondaryContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
    marginTop: 20,
  },
});

export default styles;
