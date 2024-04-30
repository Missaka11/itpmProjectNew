import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TravelPlansBtn = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.TravelPlansButton}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Travel Plans", { location: props.location });
        }}
        style={styles.locationBtn}
      >
        <Text>Travel Plans</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TravelPlansBtn;

const styles = StyleSheet.create({
  locationBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "aqua",
    borderRadius: 8,
    height: 40,
    width: 240,
    bottom: 10,
  },
});
