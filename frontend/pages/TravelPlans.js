import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import TPlans from "../components/TPlans";
import { useNavigation } from "@react-navigation/native";

export default function TravelPlans() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <TPlans/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
