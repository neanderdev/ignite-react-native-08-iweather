import { StyleSheet } from "react-native";

import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  day: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,

    color: theme.colors.gray_200,
  },
  img: {
    width: 56,
    height: 56,

    marginVertical: 4,
  },
  min: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,

    color: theme.colors.gray_400,
  },
  max: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,

    color: theme.colors.gray_100,
  },
});
