import { StyleSheet } from "react-native";

import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    height: 180,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    padding: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "LBold",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: "10%",
  },
  price: {
    fontSize: 18,
    fontFamily: "LRegular",
  },
  weight: {
    fontSize: 16,
    fontFamily: "LRegular",
  },
  text: {
    color: colors.text,
    textShadowColor: colors.black,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 40,
  },
});
