import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

const Music = ({ route, navigation }) => {
  const { name, action } = route.params;
  let [liked, setLiked] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
          <FontAwesome
            name={liked ? "heart" : "heart-o"}
            size={24}
            color="#fff"
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={require("../assets/music.jpg")}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Text style={{ fontWeight: "100", fontSize: 32 }}>Music Screen</Text>
        <Text style={{ fontWeight: "600", marginVertical: 32 }}>
          {name} say to {action}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "#fff" }}>Go to the Home Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

export default Music;
