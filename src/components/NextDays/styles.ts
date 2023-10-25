import { StyleSheet } from "react-native";

import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 12,

    backgroundColor: theme.colors.gray_800,

    borderRadius: 12,
  },
});
