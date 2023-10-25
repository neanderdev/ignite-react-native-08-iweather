import { StyleSheet } from "react-native";

import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",

    padding: 20,

    backgroundColor: theme.colors.gray_700,

    borderRadius: 8,

    overflow: "hidden",

    resizeMode: "cover",
  },
  city: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,

    color: theme.colors.gray_100,
  },
  day: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,

    color: theme.colors.gray_100,
  },
  footer: {
    width: "100%",

    flexDirection: "row",
  },
  details: {
    flex: 1,
    justifyContent: "flex-end",

    marginBottom: 16,
  },
  temperature: {
    fontFamily: theme.fonts.extra_bold,
    fontSize: 48,

    color: theme.colors.white,
  },
  minMax: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,

    color: theme.colors.white,
  },
  weather: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    textTransform: "capitalize",

    color: theme.colors.white,
  },
});
