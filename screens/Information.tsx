import React from "react";
import { View, Alert, Touchable, TouchableOpacity, Text } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles";
import Header from "../components/Header";
import { StackParams } from "../App";

const Information = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View style={styles.container}>
      <Header title="Kom ihåg!"></Header>
        <View style = {styles.blueContainer}></View>
          <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.replace("Menu")}>
            <Text style={styles.textStyle}>
              Alla objekt och metoder som
              används i översättningarna kräver mer kod än vad som visas i
              översättningen. Denna app visar exempel på hur blocken skulle 
              kunna skrivas i kod tillsammans med de färdiga metoderna.
            </Text>
          </TouchableOpacity>
          <Text style= {styles.constructorTextStyle}>Ha så kul!</Text>
        <View style = {styles.blueContainer}></View>
        <View style = {styles.blueContainer}></View>
    </View>
    
  );
};

export default Information;
