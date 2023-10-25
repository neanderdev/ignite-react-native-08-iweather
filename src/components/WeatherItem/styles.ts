import { StyleSheet } from "react-native";

import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 20,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray_700,
  },
  title: {
    flex: 1,

    marginLeft: 12,

    fontFamily: theme.fonts.bold,
    fontSize: 14,

    color: theme.colors.gray_200,
  },
  value: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,

    color: theme.colors.gray_100,
  },
});
