import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

const image = {
  uri: "https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=854&h=480&dpr=2",
};

export default function SavedLocations() {
  return (
    <TouchableOpacity style={styles.savedBudgectsView}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
          <Text style={{ fontSize: 20, color: "white" }}>Saved Budgects</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 130,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
  },
});
