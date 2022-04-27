import React from "react";
import { View, ScrollView, Alert } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import ClickableBlock from "../components/ClickableBlock";
import GoingBack from "../components/GoingBack";
import Header from "../components/Header";
import styles from "../styles";
import TextParagraph from "../components/TextParagraph";
import { StackParams } from "../App";
import * as BlockData from "../assets/blocks/BlockData";

interface Props {
  route: any;
}

export const ScrollContainer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View style={styles.scrollContainer}>
      <ScrollView>
        <ClickableBlock
          source={BlockData.move10.source}
          onPress={() => {
            navigation.navigate("FlashcardView", {
              frontside_block: BlockData.move10.source,
              translation: BlockData.move10.translation,
            });
          }}
        />
        <ClickableBlock
          source={BlockData.turn_right_15deg.source}
          onPress={() => {
            navigation.navigate("FlashcardView", {
              frontside_block: BlockData.turn_right_15deg.source,
              translation: BlockData.turn_right_15deg.translation,
            });
          }}
        />
        <ClickableBlock
          source={BlockData.turn_left_15deg.source}
          onPress={() => {
            navigation.navigate("FlashcardView", {
              frontside_block: BlockData.turn_left_15deg.source,
              translation: BlockData.turn_left_15deg.translation,
            });
          }}
        />
        <ClickableBlock
          source={BlockData.go_to_random.source}
          onPress={() => {
            navigation.navigate("FlashcardView", {
              frontside_block: BlockData.go_to_random.source,
              translation: BlockData.go_to_random.translation,
            });
          }}
        />
        <ClickableBlock
          source={BlockData.go_to_x_y.source}
          onPress={() => {
            navigation.navigate("FlashcardView", {
              frontside_block: BlockData.go_to_x_y.source,
              translation: BlockData.go_to_x_y.translation,
            });
          }}
        />

        <ClickableBlock
          source={require("../assets/blocks/glide_secs_random.png")}
        />
        <ClickableBlock source={require("../assets/blocks/glide_x_y.png")} />
        <ClickableBlock
          source={require("../assets/blocks/point_direction_90.png")}
        />
        <ClickableBlock
          source={require("../assets/blocks/point_mouse_pointer.png")}
        />
        <ClickableBlock source={require("../assets/blocks/change_x_10.png")} />

        <ClickableBlock source={require("../assets/blocks/set_x_0.png")} />

        <ClickableBlock source={require("../assets/blocks/change_y_10.png")} />

        <ClickableBlock source={require("../assets/blocks/set_y_0.png")} />
      </ScrollView>
    </View>
  );
};
