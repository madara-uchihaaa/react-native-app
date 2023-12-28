import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import Signup from "../pages/Signup";
import SignIn from "../pages/SignIn";

const Drawer = createDrawerNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SignUp">
        <Drawer.Screen name="SignUp" component={Signup} />
        <Drawer.Screen name="SignIn" component={SignIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
