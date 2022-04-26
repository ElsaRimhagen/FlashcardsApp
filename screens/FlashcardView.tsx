import React from "react";
import { View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import Header from "../components/Header";
import styles from "../styles";
import GoingBack from "../components/GoingBack";
import Flashcard from "../components/Flashcard";
import { StackParams } from "../App";

const FlashcardView = (route: any) => {
  const { frontside_block, translation } = route.params;

  return (
    <View style={styles.containerCenter}>
      <GoingBack />
      <Header title="Vad blir" />
      <Flashcard
        frontside_block={{ frontside_block }}
        translation={{ translation }}
      />
      <Header title="i kod?" />
      <View style={styles.blueContainer}></View>
    </View>
  );
};

export default FlashcardView;
