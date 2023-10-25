import { StyleSheet } from "react-native";

import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,

    flexDirection: "row",

    paddingHorizontal: 20,

    backgroundColor: theme.colors.gray_600,

    borderRadius: 8,

    fontSize: 16,
    fontFamily: theme.fonts.regular,
  },
  input: {
    flex: 1,

    color: theme.colors.white,
  },
});
