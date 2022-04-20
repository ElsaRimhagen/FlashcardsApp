import {
  Animated,
  View,
  StyleSheet,
  Easing,
  TouchableOpacity,
} from "react-native";

import React, { useState, useEffect } from "react";

import { StackParams } from "../App";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

const StartingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  let rotateValueHolder = new Animated.Value(0);
  rotateValueHolder.setValue(0);
  Animated.timing(rotateValueHolder, {
    toValue: 1,
    duration: 1500,
    easing: Easing.quad,
    useNativeDriver: false,
    // }).start () --> om bara snurra en gång
  }).start();

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["360deg", "0deg"],
  });

  setTimeout(() => {
    navigation.replace("Menu");
  }, 1500);

  return (
    <View style={styles.container}>
      <View>
        <Animated.Image
          source={require("../assets/scratch_cat.png")}
          style={[styles.logo, { transform: [{ rotate: RotateData }] }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C97FF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#4c94fc",
    fontWeight: "bold",
    fontSize: 100,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
  },
});

export default StartingScreen;
