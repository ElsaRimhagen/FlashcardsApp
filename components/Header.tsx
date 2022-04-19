import { Text, View, StyleSheet } from "react-native";
import styles from "../styles";

interface props

const Header = ( {props}: {props :string} ) => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
    );
  };

export default Header;