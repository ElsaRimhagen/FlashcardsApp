import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../styles";

import { StackParams } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

export const navigation =
  useNavigation<NativeStackNavigationProp<StackParams>>();

export const GoingBack: React.FC = () => {
  return (
    <TouchableOpacity
      style={styles.GoBackTouchableOpacity}
      onPress={() => navigation.goBack()}
    >
      <Image style={styles.GoBackStyle} source={require("../assets/pil.png")} />
    </TouchableOpacity>
  );
};
