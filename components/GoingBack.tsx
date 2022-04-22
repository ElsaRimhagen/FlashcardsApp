import { TouchableOpacity, Image, View } from "react-native";
import styles from "../styles";

interface Props {
  onPress?: () => void;
}

const GoingBack: React.FC<Props> = ({ onPress }) => {
  return (
    <View style={styles.blueContainer}> 
      <TouchableOpacity 
        style={styles.GoBackTouchableOpacity} 
        onPress={onPress}>
        <Image 
        style={styles.GoBackStyle} 
        source={require("../assets/icons/pil.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default GoingBack;
