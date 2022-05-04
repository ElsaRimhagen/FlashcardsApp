import React from "react";
import { View, Text, Animated, Easing } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles";
import { StackParams } from "../App";


const UnderConstruction = () => {
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
    
    return (
        <View style = {styles.scrollContainer}>
            <Animated.Image 
                source = {require("../assets/icons/cat_constructor.png")}
                style = {[styles.constructorCatStyle, { transform: [{ rotate: RotateData }] }]}
            />
            <Text style = {styles.constructorTextStyle}> Under konstruktion </Text>
        </View>
    );
  };
  
  export default UnderConstruction;




