import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Home from "./Screens/Home";
import Music from "./Screens/Music";
import Settings from "./Screens/Settings";
import Details from "./Screens/Details";
import CustomHeader from "./components/CustomHeader";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Badge({ name, count, color, size }) {
  return (
    <View style={{ width: 24, height: 24 }}>
      <FontAwesome name={name} color={color} size={size} />

      {count > 0 && (
        <View style={styles.badge}>
          <Text style={{ color: "#fff", fontSize: 12 }}>{count}</Text>
        </View>
      )}
    </View>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "SettingsScreen") {
            return <Badge name="cog" color={color} size={size} count={99} />;
          }

          return <FontAwesome name="paperclip" size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#6420ee",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="SettingsScreen" component={Settings} />
      <Tab.Screen name="DetailsScreen" component={Details} />
    </Tab.Navigator>
  );
}

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
        <Stack.Screen name="Settings" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: "#6420ee",
    borderRadius: 7,
    width: 14,
    height: 14,
    justifyContent: "center",
    alignItems: "center",
  },
});
