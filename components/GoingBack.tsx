import { TouchableOpacity, Image } from "react-native";
import styles from "../styles";

interface Props {
  onPress?: () => void;
}

const GoingBack: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.GoBackTouchableOpacity} 
      onPress={onPress}>
      <Image 
      style={styles.GoBackStyle} 
      source={require("../assets/pil.png")} />
    </TouchableOpacity>
  );
};

export default GoingBack;
