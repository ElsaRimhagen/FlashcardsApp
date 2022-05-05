import React from "react";
import { View } from "react-native";

import GoingBack from "../components/GoingBack";
import Header from "../components/Header";
import styles from "../styles";
import TextParagraph from "../components/TextParagraph";
import { ScrollContainer } from "../components/ScrollContainer";

interface Props {
  route: any;
}

const SubMenu = ({ route }: Props) => {
  let data = route.params;

  return (
    <View style={styles.containerCenter}>
      <GoingBack />
      <Header title={data.title} />
      <TextParagraph text_row1={data.text_row1} text_row2={data.text_row2} />
      <ScrollContainer chosenCategory={data.title} />
    </View>
  );
};

export default SubMenu;
