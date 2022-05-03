import React from "react";
import { View, FlatList } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import ClickableBlock from "../components/ClickableBlock";
import styles from "../styles";
import { StackParams } from "../App";
import { Blocks } from "../assets/blocks/BlockData";

interface Props {
  chosenCategroy: string;
}

export const ScrollContainer = ( {chosenCategroy} : Props ) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  
  const data = {Blocks}

  let filteredData = data.filter( function (item) {
    return item.category.includes(chosenCategroy) 
  })

  const renderClickableBlock = ({ item }: { item: any }) => {
    return (
      <ClickableBlock
        source={item.source}
        onPress={() => {
          navigation.navigate("FlashcardView", {
            frontside_block: item.source,
            translation: item.translation,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.scrollContainer}>
      <FlatList 
      data = {filteredData} 
      renderItem={renderClickableBlock} />
    </View>
  );
};
