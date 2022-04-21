import { TouchableOpacity, Image } from "react-native";
import styles from "../styles";

import { StackParams } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

interface Props {
  onPress?: () => void;
}

const GoingBack: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.GoBackTouchableOpacity} onPress={onPress}>
      <Image style={styles.GoBackStyle} source={require("../assets/pil.png")} />
    </TouchableOpacity>
  );
};

export default GoingBack;
