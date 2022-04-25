import React from "react";
import { View } from "react-native";

import Header from "../components/Header";
import styles from "../styles";
import GoingBack from "../components/GoingBack";
import Flashcard from "../components/Flashcard";


const FlashcardView = () => {

  return (
    <View style={styles.containerCenter}>
      <GoingBack />
      <Header title= "Vad blir" />
      <Flashcard frontside= {require("../assets/blocks/move_10.png")} backside = "baksida" />
      <Header title = "i kod?" />
    </View>
  );
};

export default FlashcardView;
