import { StyleSheet } from "react-native";
import { colors } from "./assets/colors";

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },

  // Containers //
  blueContainer: {
    width: "100%",
    height: "10%",
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "50%",
    height: "25%",
    padding: 5,
    backgroundColor: colors.background,
  },
  boxContainer: {
    width: "100%",
    height: "85%",
    backgroundColor: colors.background,
    padding: 0,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerCenter: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  innerbox: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    width: "100%",
    height: "65%",
    backgroundColor: colors.background,
    //padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  // Headers & Text //
  categorytextStyle: {
    color: colors.headers,
    fontFamily: "American-Typewriter",
    fontSize: 30,
    // padding: 10,
  },
  headerStyle: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: colors.text,
    fontFamily: "American-Typewriter",
    fontSize: 30,
  },
  titleStyle: {
    color: colors.headers,
    fontFamily: "American-Typewriter",
    fontSize: 80,
    // padding: 30,
  },

  // Images & logotypes //
  blockStyle: {
    height: 60,
    resizeMode: "contain",
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  catLogo: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  GoBackStyle: {
    resizeMode: "contain",
    width: 60,
    height: 60,
  },
  GoBackTouchableOpacity: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    left: 15,
    bottom: 15,
  },
  imgStyle: {
    width: 80,
    height: 80,
    resizeMode: "stretch",
  },
});

export default styles;
