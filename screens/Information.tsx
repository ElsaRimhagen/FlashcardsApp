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
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.replace("Menu")}
    >
      <View style={styles.container}>
        <Header title="Kom ihåg!"></Header>
        <Text style={styles.textStyle}>
          Alla objekt och metoder som används i översättningarna kräver mer kod
          än vad som visas i översättningen, men med denna app får du exempel på
          hur man får egenskapade föremål att bete sig som man vill med sen
          innan skapade funktioner!
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Information;
