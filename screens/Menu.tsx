import React from "react";
import { View, Alert } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles";
import Header from "../components/Header";
import CategoryLogo from "../components/CategoryLogo";
import { StackParams } from "../App";

const Menu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const Boxes = () => {
    const handlePress = () => Alert.alert("Kommer i framtida uppdateringar");

    return (
      <View style={styles.boxContainer}>
        <CategoryLogo
          source={require("../assets/categories/motion.png")}
          category="Rörelse"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Rörelse",
              explanation: "Sprites rörelser",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/looks.png")}
          category="Utseende"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Utseende",
              explanation: "Sprites utseende",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/sound.png")}
          category="Ljud"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Ljud",
              explanation: "Sprites utseende",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/events.png")}
          category="Händelser"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Händelser",
              explanation: "Sprites utseende",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/controll.png")}
          category="Kontroll"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Kontroll",
              explanation: "Sprites utseende",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/feel.png")}
          category="Känna av"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Känna av",
              explanation: "Sprites utseende",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/operations.png")}
          category="Operatorer"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Operatorer",
              explanation: "Sprites utseende",
            });
          }}
        />
        <CategoryLogo
          source={require("../assets/categories/variables.png")}
          category="Variabler"
          onPress={() => {
            navigation.navigate("SubMenu", {
              title: "Variabler",
              explanation: "Sprites utseende",
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
