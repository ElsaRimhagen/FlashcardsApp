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
      frontside_block: any;
      translation: string;
  }


  const Flashcard: React.FC<Props> = ({ frontside_block, translation}) => {
    return (
    <View style={styles.flashcardContainer}>
      <TouchableOpacity style={styles.center} onPress={FlipcardAnimation}>
        <View>

          <Animated.View style = {[styles.flashcardStyle, {transform: [{rotateY: frontInterpolate}]} ]}>
              <Image style={styles.bigBlockStyle} source = {frontside_block}/>
          </Animated.View>

          <Animated.View 
            style ={[styles.flashcardStyle,
              styles.flashcardBacksideStyle,
              {transform: [{ rotateY: backInterpolate }]} ]}>
              <View style = {styles.translationContainerStyle}>
                <Text style={styles.translationStyle}> {translation} </Text>
              </View>
          </Animated.View>
          
        </View>
      </TouchableOpacity>
    </View>
    );
  };

export default Flashcard; 

//<Animated.View style={[styles.outerflashcardStyle,styles.outerflashcardBacksideStyle,{transform: [{ rotateY: backInterpolate }] },]} >
// <Animated.View style = {[styles.outerflashcardStyle, {transform: [{rotateY: frontInterpolate}]} ]}>