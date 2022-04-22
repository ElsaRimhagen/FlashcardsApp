import React from "react";
import { View, ScrollView } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import ClickableBlock from "../components/ClickableBlock";
import GoingBack from "../components/GoingBack";
import Header from "../components/Header";
import styles from "../styles";
import TextParagraph from "../components/TextParagraph";
import { StackParams } from "../App";

const MotionMenu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const ScrollContainer = () => {
    return (
      <View style={styles.scrollContainer}>
        <ScrollView>
          <ClickableBlock source={require("../assets/blocks/move_10.png")} />
          <ClickableBlock
            source={require("../assets/blocks/turn_right_15deg.png")}
          />
          <ClickableBlock
            source={require("../assets/blocks/turn_left_15deg.png")}
          />
          <ClickableBlock
            source={require("../assets/blocks/go_to_random.png")}
          />
          <ClickableBlock source={require("../assets/blocks/go_to_x_y.png")} />
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
          <ClickableBlock
            source={require("../assets/blocks/change_x_10.png")}
          />
          <ClickableBlock source={require("../assets/blocks/set_x_0.png")} />
          <ClickableBlock
            source={require("../assets/blocks/change_y_10.png")}
          />
          <ClickableBlock source={require("../assets/blocks/set_y_0.png")} />
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.containerCenter}>
      <Header title="Rörelse" />
      <TextParagraph
        text_row1="kontrollerar din"
        text_row2="Sprites rörelser"
      />
      <ScrollContainer />
      <GoingBack />
    </View>
  );
};

export default MotionMenu;
