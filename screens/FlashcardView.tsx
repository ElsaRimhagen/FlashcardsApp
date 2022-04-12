import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const FlashcardView = () => {
  let animatedValue = new Animated.Value(0);
  let currentValue = 0;

  animatedValue.addListener(({ value }) => {
    currentValue = value;
  });

  const flipCard = () => {
    if (currentValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      }).start();
    }
  };

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.titleStyle}>Vad blir</Text>
      </View>
    );
  };

  const BottomText = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.titleStyle}>i kod?</Text>
      </View>
    );
  };

  const FlashcardContainer = () => {
    return (
      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.touchStyle} onPress={flipCard}>
          <View>
            <Animated.View
              style={[
                styles.flashcardStyle,
                { transform: [{ rotateY: frontInterpolate }] },
              ]}
            >
              <Text style={styles.textStyle}>This is the frontside</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.flashcardStyle,
                styles.backsideStyle,
                { transform: [{ rotateY: backInterpolate }] },
              ]}
            >
              <Text style={styles.textStyle}>This is the backside</Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const clickHandler = () => {
    alert("Floating button clicked!");
  };

  const GoingBack = () => {
    return (
      <TouchableOpacity style={styles.touchableOpacity} onPress={clickHandler}>
        <Image
          style={styles.floatingButton}
          source={require("../assets/pil.png")}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlashcardContainer />
      <BottomText />
      <GoingBack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C97FF",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    color: "#F8A839",
    fontFamily: "American-Typewriter",
    fontSize: 80,
    padding: 30,
  },
  boxContainer: {
    width: "100%",
    height: "50%",
    backgroundColor: "white",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  flashcardStyle: {
    width: 300,
    height: 200,
    backgroundColor: "#0B8D69",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  textStyle: {
    color: "#F8A839",
    fontFamily: "American-Typewriter",
    fontSize: 30,
  },
  backsideStyle: {
    backgroundColor: "black",
    position: "absolute",
    top: 0,
  },
  touchStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  touchableOpacity: {
    position: "absolute",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    left: 30,
    bottom: 30,
  },
  floatingButton: {
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
});

export default FlashcardView;
