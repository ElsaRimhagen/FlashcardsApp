import { TouchableOpacity, Image, View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles";
import { StackParams } from "../App";

const GoingForward = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  
  return (
    <View style={styles.blueContainer}>
        <Image
          style={styles.GoForwardStyle}
          source={require("../assets/icons/pil_right.png")}
        />
    </View>
  );
};

export default GoingForward;