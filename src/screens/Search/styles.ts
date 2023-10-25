import { Dimensions, StyleSheet } from "react-native";

import { theme } from "@styles/theme";

const dimensions = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.height,

    padding: 24,
    paddingTop: 48,

    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",

    width: "100%",

    paddingBottom: 56,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    textAlign: "center",

    color: theme.colors.white,
  },
  brand: {
    color: theme.colors.blue_light,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    textAlign: "center",

    color: theme.colors.gray_200,

    marginTop: 4,
    marginBottom: 32,
  },
  scroll: {
    backgroundColor: theme.colors.gray_900,
  },
});
