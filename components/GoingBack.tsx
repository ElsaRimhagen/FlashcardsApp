import { TouchableOpacity, Image, View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles";
import { StackParams } from "../App";

const GoingBack = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  
  return (
    <View style={styles.blueContainer}>
      <TouchableOpacity
        style={styles.GoBackTouchableOpacity}
        onPress={ () => navigation.goBack()}
      >
        <Image
          style={styles.GoBackStyle}
          source={require("../assets/icons/pil.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GoingBack;
