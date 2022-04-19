import { Text, View } from "react-native";
import styles from "../styles";

interface Props {
  title: string;
}

<<<<<<< HEAD
const Header: React.FC<Props> = ({title}) => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}> {title} </Text>
      </View>
    );
  };
=======
const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};
>>>>>>> 498b8b9537ff4a1392158761d47a25a686f91020

export default Header;
