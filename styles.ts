import { StyleSheet } from "react-native";
import { colors } from "./assets/colors";

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  // Containers //
  contatiner: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerCenter: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },

  boxContainer: {
    width: "100%",
    height: "85%",
    backgroundColor: colors.background,
    padding: 0,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  scrollContainer: {
    width: "80%",
    height: "85%",
    backgroundColor: colors.background,
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "50%",
    height: "25%",
    padding: 5,
    backgroundColor: colors.background,
  },
  innerbox: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },

  // Headers & Text //
  headerStyle: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    color: colors.headers,
    fontFamily: "American-Typewriter",
    fontSize: 80,
    // padding: 30,
  },
  textStyle: {
    color: colors.headers,
    fontFamily: "American-Typewriter",
    fontSize: 30,
    // padding: 10,
  },

  // Images & logotypes //
  imgStyle: {
    width: 80,
    height: 80,
    resizeMode: "stretch",
  },
  GoBackStyle: {
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
  catLogo: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
  },
  blockStyle: {
    width: 250,
    height: 75,
    resizeMode: "contain",
    padding: 10,
    margin: 5,
  },
  GoBackTouchableOpacity: {
    position: "absolute",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    left: 30,
    bottom: 30,
  },
});

export default styles;
