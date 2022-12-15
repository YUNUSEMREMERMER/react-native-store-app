import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#03c961" },
  logo_container: { flex: 1, alignItems: "center", justifyContent: "center" },
  body_container: { flex: 1 },
  logo: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
    resizeMode: "contain",
  },
});
