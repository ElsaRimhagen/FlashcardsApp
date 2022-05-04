import React from "react";
import { View, FlatList } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import ClickableBlock from "./ClickableBlock";
import styles from "../styles";
import { StackParams } from "../App";
import { BlockData } from "../assets/blocks/BlockData";

interface Props {
  chosenCategory: string;
}

export const ScrollContainer = ({ chosenCategory }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  let filtereddata = BlockData.filter(
    (block) => block.category == chosenCategory
  );

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
        data={filtereddata}
        renderItem={renderClickableBlock}
        keyExtractor={(index) => String(index)}
      />
    </View>
  );
};
