import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import ClickableBlock from "../components/clickableBlock";
import Header from "../components/Header";
import styles from "../styles";
import { StackParams } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";


const MotionMenu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const ScrollContainer = () => {
    return (
      <View style={styles.scrollContainer}>
        <ScrollView>
          <ClickableBlock source = {require("../assets/move_10steps.png")} />
          <ClickableBlock source={require("../assets/turn_right_15deg.png")} />
          <ClickableBlock source={require("../assets/turn_left_15deg.png")} />
          <ClickableBlock source = {require("../assets/move_10steps.png")} />
        </ScrollView>
      </View>
    );
  };
  const GoingBack = () => {
    return (
      <TouchableOpacity
        style={styles.GoBackTouchableOpacity}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.GoBackStyle}
          source={require("../assets/pil.png")}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerCenter}>
      <Header title = "Rörelse" />
      <ScrollContainer />
      <GoingBack />
    </View>
  );
};



export default MotionMenu;
