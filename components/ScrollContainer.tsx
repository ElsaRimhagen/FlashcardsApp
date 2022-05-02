import React from "react";
import { View, ScrollView, FlatList } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import ClickableBlock from "../components/ClickableBlock";
import styles from "../styles";
import { StackParams } from "../App";
import { Blocks } from "../assets/blocks/BlockData";

export const ScrollContainer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const renderClickableBlock = ({ item }: { item: any; }) => {
    return (
      <ClickableBlock
              source = {item.source}
              onPress={() => {
                navigation.navigate("FlashcardView", {
                  frontside_block: item.source,
                  translation: item.translation,
                });
              }}
            />
    )
  };

  return (
    <View style={styles.scrollContainer}>
      <FlatList data = {Blocks} renderItem = {renderClickableBlock} />
    </View>
  );
};
