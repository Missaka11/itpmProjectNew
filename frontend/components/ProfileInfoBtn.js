import {
  StyleSheet,
  Text,
  View,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ProfileInfoBtn() {
  const navigation = useNavigation();
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UserProfilePage");
        }}
        style={styles.ProfileInfoBtn}
      >
        <Text>Edit Profile</Text>
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
