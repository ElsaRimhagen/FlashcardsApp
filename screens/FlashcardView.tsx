import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated, Image } from "react-native";

import Header from "../components/Header";
 // import FlipcardAnimation from "../components/FlipcardAnimation";
 import styles from "../styles";
 import GoingBack from "../components/GoingBack";
import Flashcard from "../components/Flashcard";


const FlashcardView = () => {
  let animatedValue = new Animated.Value(0);
  let currentValue = 0;

  animatedValue.addListener(({ value }) => {
    currentValue = value;
  });

  const FlipcardAnimation = () => {
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

  const FlashcardContainer = () => {
    return (
      <View style={styles.flashcardContainer}>
        <TouchableOpacity style={styles.center} onPress={FlipcardAnimation}>
          <View>
            <Animated.View
              style = {[
                styles.flashcardStyle, 
                {transform: [{rotateY: frontInterpolate}]} 
              ]}>
              <Text style={styles.textStyle}>This is the frontside</Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.flashcardStyle,
                styles.flashcardBacksideStyle,
                {transform: [{ rotateY: backInterpolate }] },
              ]}>
              <Text style={styles.textStyle}>This is the backside</Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.containerCenter}>
      <GoingBack />
      <Header title= "Vad blir" />
      <FlashcardContainer />
      <Header title = "i kod?" />
      
    </View>
  );
};

export default FlashcardView;
