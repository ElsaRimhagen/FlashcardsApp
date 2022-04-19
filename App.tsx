import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FlashcardsView from "./screens/FlashcardView";
import Menu from "./screens/Menu";
import MotionMenu from "./screens/MotionMenu";
import StartingScreen from "./screens/StartingScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    "American-Typewriter": require("./assets/fonts/AmericanTypewriterRegular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: "blue" },
          title: "",
        }}
      >
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
        <Stack.Screen name="FlashcardView" component={FlashcardsView} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="MotionMenu" component={MotionMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
