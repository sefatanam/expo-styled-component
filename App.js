import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Screens/Home";
import Music from "./Screens/Music";
import CustomHeader from "./components/CustomHeader";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6420ee",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "200",
            fontSize: 32,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Music"
          component={Music}
          options={{
            headerTitle: (props) => <CustomHeader {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
