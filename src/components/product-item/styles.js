import { StyleSheet } from "react-native";

import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    height: 60,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    padding: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: "LBold",
    marginBottom: 5,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  price: {
    fontSize: 15,
    fontFamily: "LRegular",
  },
  weight: {
    fontSize: 12,
    fontFamily: "LRegular",
  },
});
