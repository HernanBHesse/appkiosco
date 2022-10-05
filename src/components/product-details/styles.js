import { StyleSheet } from "react-native";

import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "auto",
    margin: 20,
    padding: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontFamily: "LBold",
    color: colors.text,
  },
  detailsContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  price: {
    fontSize: 20,
    fontFamily: "LRegular",
    color: colors.text,
  },
  detail: {
    fontSize: 20,
    fontFamily: "LRegular",
    color: colors.text,
  },
});
