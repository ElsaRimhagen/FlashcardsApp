import { Text, View, StyleSheet } from "react-native";



const Header = ( {props}: {props :string} ) => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
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
  })

export default Header;