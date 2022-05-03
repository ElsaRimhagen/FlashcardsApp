import { Text, View } from "react-native";

import styles from "../styles";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <View style={styles.headerStyle}>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.titleStyle}>
        {" "}
        {title}{" "}
      </Text>
    </View>
  );
};

export default Header;
