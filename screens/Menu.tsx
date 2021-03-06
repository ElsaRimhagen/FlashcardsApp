import React from "react";
import { View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles";
import Header from "../components/Header";
import CategoryLogo from "../components/CategoryLogo";
import { StackParams } from "../App";

const Menu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const Boxes = () => {
    return (
      <View style={styles.boxContainer}>
        <CategoryLogo
          source={require("../assets/categories/motion.png")}
          category="Rörelse"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Rörelse",
              text_row1: "kontrollerar din",
              text_row2: "Sprajts rörelser",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/looks.png")}
          category="Utseende"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Utseende",
              text_row1: "kontrollerar din",
              text_row2: "Sprajts utseende",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/sound.png")}
          category="Ljud"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Ljud",
              text_row1: "ger ljud till",
              text_row2: "ditt program",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/events.png")}
          category="Händelser"
          onPress={() => {
            navigation.navigate("SubMenu2", {
              title: "Händelser",
              text_row1: "kontrollerar händelser",
              text_row2: "i ditt program",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/controll.png")}
          category="Kontroll"
          onPress={() => {
            navigation.navigate("SubMenu2", {
              title: "Kontroll",
              text_row1: "kontrollerar hur och ",
              text_row2: "när saker sker",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/feel.png")}
          category="Känna av"
          onPress={() => {
            navigation.navigate("SubMenu2", {
              title: "Känna av",
              text_row1: "kontrollerar situationer",
              text_row2: "när Sprajten möter annat",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/operations.png")}
          category="Operatorer"
          onPress={() => {
            navigation.navigate("SubMenu2", {
              title: "Operatorer",
              text_row1: "kontrollerar beräkningar",
              text_row2: "och logik i ditt program",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/variables.png")}
          category="Variabler"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Variabler",
              text_row1: "kontrollerar dina",
              text_row2: "variabler i programmet",
            });
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Meny" />
      <Boxes />
    </View>
  );
};

export default Menu;
