import React from "react";
import { View, ScrollView } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import ClickableBlock from "../components/ClickableBlock";
import styles from "../styles";
import { StackParams } from "../App";
import { Blocks } from "../assets/blocks/BlockData";

export const ScrollContainer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View style={styles.scrollContainer}>
      <ScrollView>
        {Blocks.map((block) => {
          return (
            <ClickableBlock
              source={block.source}
              onPress={() => {
                navigation.navigate("FlashcardView", {
                  frontside_block: block.source,
                  translation: block.translation,
                });
              }}
            />
          );
        })}
        ;
      </ScrollView>
    </View>
  );
};
