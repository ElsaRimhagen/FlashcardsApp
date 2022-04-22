import { Text, View } from "react-native";

import styles from "../styles";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.titleStyle}> {title} </Text>
    </View>
  );
};

export default Header;
