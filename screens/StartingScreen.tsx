import { Animated, View, Easing } from "react-native";
import React from "react";
import { StackParams } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import styles from "../styles";

const StartingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  let rotateValueHolder = new Animated.Value(0);
  rotateValueHolder.setValue(0);
  Animated.timing(rotateValueHolder, {
    toValue: 1,
    duration: 1500,
    easing: Easing.quad,
    useNativeDriver: false,
  }).start();

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["360deg", "0deg"],
  });

  setTimeout(() => {
    navigation.replace("Menu");
  }, 1500);

  return (
    <View style={styles.containerCenter}>
      <View>
        <Animated.Image
          source={require("../assets/icons/scratch_cat.png")}
          style={[styles.catLogo, { transform: [{ rotate: RotateData }] }]}
        />
      </View>
    </View>
  );
};

export default StartingScreen;
