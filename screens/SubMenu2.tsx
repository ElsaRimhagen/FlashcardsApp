import React from "react";
import { View } from "react-native";

import GoingBack from "../components/GoingBack";
import Header from "../components/Header";
import styles from "../styles";
import TextParagraph from "../components/TextParagraph";
import UnderConstruction from "../components/UnderConstruction";

interface Props {
  route: any;
}

const SubMenu = ({ route }: Props) => {
  let data = route.params;

  return (
    <View style={styles.containerCenter}>
      <GoingBack />
      <Header title={data.title} />
      <TextParagraph
        text_row1= {data.text_row1}
        text_row2={data.text_row2}
      />
      <View style = {styles.blueContainer}></View>
      <UnderConstruction/>
    </View>
  );
};

export default SubMenu;
