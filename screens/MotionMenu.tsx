import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import ClickableBlock from "../components/clickableBlock";
import GoingBack from "../components/GoingBack";
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
          <ClickableBlock source = {require("../assets/set_x_0.png")} />
          <ClickableBlock source = {require("../assets/set_y_0.png")} />
          <ClickableBlock source = {require("../assets/change_x_10.png")} />
          <ClickableBlock source = {require("../assets/change_y_10.png")} />
          <ClickableBlock source = {require("../assets/move_10.png")} />
          <ClickableBlock source = {require("../assets/turn_right_15deg.png")} />
          <ClickableBlock source= {require("../assets/turn_left_15deg.png")} />
          <ClickableBlock source = {require("../assets/go_to_random.png")} />
          <ClickableBlock source = {require("../assets/go_to_x_y.png")} />
          <ClickableBlock source = {require("../assets/point_direction_90.png")} />
          <ClickableBlock source = {require("../assets/glide_secs_random.png")} />
          <ClickableBlock source = {require("../assets/glide_x_y.png")} />
          
          <ClickableBlock source = {require("../assets/point_mouse_pointer.png")} />
          
          
          
        </ScrollView>
      </View>
    );
  };
  // const GoingBack = () => {
  //   return (
  //     <TouchableOpacity
  //       style={styles.GoBackTouchableOpacity}
  //       onPress={() => navigation.goBack()}
  //     >
  //       <Image
  //         style={styles.GoBackStyle}
  //         source={require("../assets/pil.png")}
  //       />
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <View style={styles.containerCenter}>
      <Header title="Rörelse" />
      <ScrollContainer />
      <GoingBack onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MotionMenu;
