import React from "react";
import { View, Alert } from "react-native";
import styles from "../styles";
import Header from "../components/Header";
import CategoryLogo from "../components/CategoryLogo";
import { StackParams } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

const Menu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const Boxes = () => {
    const handlePress = () => Alert.alert("Kommer i framtida uppdateringar");

    return (
      <View style={styles.boxContainer}>
        <CategoryLogo
          source={require("../assets/motion.png")}
          category="Rörelse"
          onPress={() => {
            navigation.navigate("MotionMenu");
          }}
        />
        <CategoryLogo
          source={require("../assets/looks.png")}
          category="Utseende"
          onPress={handlePress}
        />
        <CategoryLogo
          source={require("../assets/sound.png")}
          category="Ljud"
          onPress={handlePress}
        />

        <CategoryLogo
          source={require("../assets/events.png")}
          category="Händelser"
          onPress={handlePress}
        />
        <CategoryLogo
          source={require("../assets/controll.png")}
          category="Kontroll"
          onPress={handlePress}
        />
        <CategoryLogo
          source={require("../assets/feel.png")}
          category="Känna av"
          onPress={handlePress}
        />
        <CategoryLogo
          source={require("../assets/operations.png")}
          category="Operatorer"
          onPress={handlePress}
        />
        <CategoryLogo
          source={require("../assets/variables.png")}
          category="Variabler"
          onPress={handlePress}
        />
      </View>
    );
  };

  return (
    <View style={styles.contatiner}>
      <Header title="Meny" />
      <Boxes />
    </View>
  );
};

export default Menu;
