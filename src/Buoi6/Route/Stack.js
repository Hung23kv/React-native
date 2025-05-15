import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Sreens/Home";
import DetailFood from "../Sreens/DetailFood";

const Stack = createStackNavigator();

const StackRoute = () => {
  return (
      <Stack.Navigator initialRouteName="Cuisines">
        <Stack.Screen name="Cuisines" component={Home} />
        <Stack.Screen name="DetailFood" component={DetailFood} />
      </Stack.Navigator>
  );
};

export default StackRoute;
