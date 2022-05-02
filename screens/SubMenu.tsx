import React from "react";
import { View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";


import GoingBack from "../components/GoingBack";
import Header from "../components/Header";
import styles from "../styles";
import TextParagraph from "../components/TextParagraph";
import { StackParams } from "../App";
import { ScrollContainer } from "../components/ScrollContainer";


interface Props {
  route: any;
}

const SubMenu = ({ route }: Props) => {
  let data = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View style={styles.containerCenter}>
      <GoingBack />
      <Header title={data.title} />
      <TextParagraph
        text_row1="kontrollerar din"
        text_row2= {data.explanation}
      />
      <ScrollContainer />
    </View>
  );
};

export default SubMenu;
