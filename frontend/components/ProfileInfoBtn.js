import {
  StyleSheet,
  Text,
  View,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ProfileInfoBtn() {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => alert("Simple Button pressed")}
        style={styles.ProfileInfoBtn}
      >
        <Text>Profile Info</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ProfileInfoBtn: {
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "85%",
    borderRadius: 8,
  },
});
