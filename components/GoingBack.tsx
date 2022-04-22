import { TouchableOpacity, Image, View } from "react-native";
import styles from "../styles";
import { StackParams } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";


interface Props {
  onPress?: () => void;
}

const GoingBack: React.FC<Props> = ({ onPress }) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View style={styles.blueContainer}> 
      <TouchableOpacity 
        style={styles.GoBackTouchableOpacity} 
        onPress={() => navigation.goBack()} >
        <Image 
        style={styles.GoBackStyle} 
        source={require("../assets/icons/pil.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default GoingBack;
