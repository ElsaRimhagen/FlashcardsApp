import React from "react";
import {View } from "react-native";
import Header from "../components/Header";
import styles from "../styles";
import { StackParams } from "../App";
import CategoryLogo from "../components/CategoryLogo";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";



const Menu = ( ) => {
  const navigation = useNavigation<NativeStackNavigationProp <StackParams>>();

  const Boxes = () => {
    return (
      <View style={styles.boxContainer}>
        < CategoryLogo 
            source = {require("../assets/motion.png")}
            category = "Rörelse"
            onPress= {() => {navigation.navigate("MotionMenu")}}
            />
        < CategoryLogo 
          source = {require("../assets/looks.png")}
          category = "Utseende"
        />
        < CategoryLogo 
          source = {require("../assets/sound.png")}
          category = "Ljud"
        />
        < CategoryLogo 
          source = {require("../assets/events.png")}
          category = "Händelser"
        />
        < CategoryLogo 
          source = {require("../assets/controll.png")}
          category = "Kontroll"
        />
        < CategoryLogo 
          source = {require("../assets/feel.png")}
          category = "Känna av"
        />
        < CategoryLogo 
          source = {require("../assets/operations.png")}
          category = "Operatorer"
        />
        < CategoryLogo 
          source = {require("../assets/variables.png")}
          category = "Variabler"
        />
      </View>
    );
  };

  return (
    <View style={styles.contatiner}>
      <Header title = "Meny" />
      <Boxes />
    </View>
  );
};

export default Menu;
