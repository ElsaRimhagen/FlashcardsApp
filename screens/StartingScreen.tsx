import {
  Animated,
  View,
  StyleSheet,
  Easing,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StartingScreen = () => {
  let rotateValueHolder = new Animated.Value(0);
  const startImageRotationFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.quad,
      useNativeDriver: false,
      // }).start () --> om bara snurra en gång
    }).start(() => startImageRotationFunction());
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["360deg", "0deg"],
  });

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={startImageRotationFunction}>
          <Animated.Image
            source={require("../assets/scratch_cat.png")}
            style={[styles.logo, { transform: [{ rotate: RotateData }] }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
// onLoadStart={() => this.setState({loading: true})}?

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
