import { Text, View, StyleSheet } from "react-native";
import styles from "../styles";

interface Props{
    title: string;
}

const Header: React.FC<Props> = (props) => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
    );
  };

export default Header;