import React from "react";
import { Text, View, TouchableOpacity, Animated, Image } from "react-native";

import styles from "../styles";


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

  interface Props{
      frontside: any;
      backside: any;
  }


  const Flashcard: React.FC<Props> = ({ frontside, backside}) => {
    return (
      
      <View style={styles.flashcardContainer}>
        <TouchableOpacity style={styles.center} onPress={FlipcardAnimation}>
          <View>
          <Animated.View 
          style = {[styles.outerflashcardStyle, 
          {transform: [{rotateY: frontInterpolate}]} ]} >
            <Animated.View
              style = {[
                styles.flashcardStyle, 
                ]}>
              <Image style={styles.bigBlockStyle} source = {frontside}/>
            </Animated.View>
          </Animated.View>

          <Animated.View 
          style={[styles.outerflashcardStyle,
          styles.outerflashcardBacksideStyle,
          {transform: [{ rotateY: backInterpolate }] },
          ]}>
            <Animated.View style ={[
              styles.flashcardStyle,
            ]}>
              <Text style={styles.textStyle}>{backside}</Text>
              </Animated.View>
            </Animated.View>
          
          </View>
        </TouchableOpacity>
      </View>
    );
  };

export default Flashcard; 

//<Animated.View style={[styles.outerflashcardStyle,styles.outerflashcardBacksideStyle,{transform: [{ rotateY: backInterpolate }] },]} >
// <Animated.View style = {[styles.outerflashcardStyle, {transform: [{rotateY: frontInterpolate}]} ]}>