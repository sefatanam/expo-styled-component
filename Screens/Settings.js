import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Settings = ({ params }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex: 1, marginTop: 64 }}>
        <Image
          source={require("../assets/settings.jpg")}
          style={{ width: undefined, height: undefined, flex: 1 }}
          resizeMode="contain"
        />
      </View>
      <View style={{flex:2,alignItems:'center'}}>
      <Text style={{ fontWeight: "100", fontSize: 32 }}>Settings</Text>

      </View>
    </View>
  );
};

export default Settings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  subContainer: {
    width: "100%",
    flex: 1,
    marginTop: 64,
  },
  imageStyle: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
  button: {
    marginTop: 32,
    paddingVertical: 12,
    width: 250,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#6420ee",
  },
});
