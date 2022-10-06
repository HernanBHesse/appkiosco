import { StyleSheet } from "react-native";

import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
  },
  footerContainer: {
    borderTopColor: colors.primary,
    borderTopWidth: 3,
    paddingVertical: 15,
    width: 360,
  },
  buttonConfirm: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.confirmButton,
    borderRadius: 10,
    padding: 10,
  },
  textButton: {
    fontSize: 20,
    fontFamily: "LBold",
  },
  totalText: {
    fontSize: 14,
    fontFamily: "LBold",
  },
});
