import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const image = {
  uri: "https://cdn.pixabay.com/photo/2023/11/07/22/56/skyscraper-8373617_1280.jpg",
};

export default function HomePage() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>User Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Travel Plans");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Travel Plans</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});