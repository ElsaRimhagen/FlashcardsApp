import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles";
import Header from "../components/Header";
import { StackParams } from "../App";

const Information = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View style={styles.container}>
      <Header title="Kom ihåg!"/>
      <View style={styles.blueContainer}></View>
      <View
        style={styles.container} >
        <Text style={styles.textStyle}>
          Alla objekt och metoder som används i översättningarna kräver mer kod
          än vad som visas i översättningen. Denna app visar exempel på hur
          blockens motsvarande anrop skulle kunna skrivas i Python-kod tillsammans med de färdiga
          metoderna.
        </Text>
      
      
      <View style={[styles.blueContainer, { flex: 1 }]}>
      <TouchableOpacity onPress={() => navigation.replace("Menu")}>
        <Image 
          source = {require('../assets/icons/have_fun_pil.png')}
          style = {styles.haveFunStyle} />
       
        </TouchableOpacity>
       
        </View>
      
      </View>
    </View>
  );
};

export default Information;
