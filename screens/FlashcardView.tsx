import React from "react";
import { View } from "react-native";

import Header from "../components/Header";
import styles from "../styles";
import GoingBack from "../components/GoingBack";
import Flashcard from "../components/Flashcard";

interface Props {
  route: any;
}

const FlashcardView = ({ route }: Props) => {
  let data = route.params;
  return (
    <View style={styles.containerCenter}>
      <GoingBack />
      <Header title="Vad blir" />
      <Flashcard
        frontside_block={data.frontside_block}
        translation={data.translation}
      />
      <Header title="i kod?" />
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default FlashcardView;
