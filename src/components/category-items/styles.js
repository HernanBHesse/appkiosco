import { StyleSheet } from "react-native";

//Constants themes
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    height: 160,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    fontFamily: "LBold",
    fontSize: 28,
    textAlign: "center",
    color: colors.text,
    textShadowColor: colors.black,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 40,
  },
});
