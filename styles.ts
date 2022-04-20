import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
    backgroundColor: "#4C97FF",
  },
  headerStyle: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    color: "#F8A839",
    fontFamily: "American-Typewriter",
    fontSize: 80,
    // padding: 30,
  },
  textStyle: {
    color: "#F8A839",
    fontFamily: "American-Typewriter",
    fontSize: 30,
    // padding: 10,
  },
  boxContainer: {
    width: "100%",
    height: "85%",
    backgroundColor: "#4C97FF",
    padding: 0,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "50%",
    height: "25%",
    padding: 5,
    backgroundColor: "#4C97FF",
  },
  innerbox: {
    flex: 1,
    backgroundColor: "#4C97FF",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: 80,
    height: 80,
    resizeMode: "stretch",
  },
  logoStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
