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
  flashcardContainer: {
    height: "50%",
    backgroundColor: colors.background,
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  innerbox: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  littleblueContainer: {
    width: "100%",
    height: "5%",
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  translationContainerStyle: {
    width: 270,
    height: 100,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
  },

  // Headers & Text //
  bottomText: {
    marginTop: -25,
    marginBottom: 15,
  },
  categorytextStyle: {
    color: colors.headers,
    fontFamily: "American-Typewriter",
    fontSize: 30,
  },
  constructorTextStyle: {
    color: colors.headers,
    fontFamily: "American-Typewriter",
    fontSize: 40,
    textAlign: "center",
  },
  headerStyle: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  textStyle: {
    color: colors.text,
    fontFamily: "American-Typewriter",
    fontSize: 30,
    textAlign: "center",
  },
  titleStyle: {
    color: colors.headers,
    fontFamily: "American-Typewriter",
    fontSize: 80,
  },
  translationStyle: {
    color: colors.text,
    fontFamily: "Helvetica",
    fontSize: 25,
  },

  // Images & logotypes //
  bigBlockStyle: {
    height: 65,
    resizeMode: "contain",
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
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
  constructorCatStyle: {
    height: 250,
    resizeMode: "contain",
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  flashcardBacksideStyle: {
    backgroundColor: colors.flashcard,
    position: "absolute",
    top: 0,
  },
  flashcardStyle: {
    width: 350,
    height: 250,
    backgroundColor: colors.flashcard,
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    borderWidth: 4,
    borderColor: colors.text,
  },
  GoForwardStyle: {
    position: "absolute",
    right: 25,
    bottom: 15,
    resizeMode: "contain",
    width: 60,
    height: 60,
  },
  GoForwardTouchableOpacity: {
    position: "absolute",
    width: 60,
    height: 60,
    right: 5,
    bottom: 15,
  },
  GoBackStyle: {
    position: "absolute",
    left: 5,
    top: 15,
    resizeMode: "contain",
    width: 60,
    height: 60,
  },
  GoBackTouchableOpacity: {
    position: "absolute",
    width: 60,
    height: 60,
    left: 5,
    top: 15,
  },
  haveFunStyle: {
    height: 100,
    resizeMode: "contain",
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: 80,
    height: 80,
    resizeMode: "stretch",
  },
});

export default styles;
