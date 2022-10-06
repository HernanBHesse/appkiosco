import { StyleSheet } from "react-native";

import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    width: 360,
    backgroundColor: colors.secondaryContainer,
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
  headerContainer: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
    paddingVertical: 15,
  },
  title: {
    textAlign: "center",
    fontFamily: "LBold",
    fontSize: 18,
  },
  contentContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  quantity: {
    fontSize: 20,
    fontFamily: "LRegular",
  },
  price: {
    fontSize: 20,
    fontFamily: "LBold",
  },
});
