import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={require("../assets/ico.png")}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Text style={{ fontWeight: "100", fontSize: 32 }}>Home Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Music", {
              name: "Sefat Anam",
              action: "Like this music",
            })
          }
        >
          <Text style={{ color: "#fff" }}>Go to the Music Screen</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>navigation.navigate("Settings")} style={styles.button}>
          <Text style={{color:'#fff'}}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

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
