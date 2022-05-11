import React from "react";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FlashcardsView from "./screens/FlashcardView";
import Menu from "./screens/Menu";
import SubMenu from "./screens/SubMenu";
import StartingScreen from "./screens/StartingScreen";
import SubMenu2 from "./screens/SubMenu2";
import Information from "./screens/Information";

export type StackParams = {
  Menu: any;
  StartingScreen: any;
  FlashcardView: any;
  SubMenu: any;
  SubMenu2: any;
  Information: any;
};

const Stack = createNativeStackNavigator<StackParams>();

const App = () => {
  let [fontsLoaded] = useFonts({
    "American-Typewriter": require("./assets/fonts/AmericanTypewriterRegular.ttf"),
    "American-Typewriter-Bold": require("./assets/fonts/AmericanTypewriterBold.ttf"),
    "Helvetica": require("./assets/fonts/Helvetica.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartingScreen"
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: "blue" },
          title: "",
        }}
      >
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="FlashcardView" component={FlashcardsView} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="SubMenu" component={SubMenu} />
        <Stack.Screen name="SubMenu2" component={SubMenu2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
