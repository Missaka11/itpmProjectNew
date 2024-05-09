import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

export default function SliderHome() {
  const navigation = useNavigation();

  const images = [
    "https://itpmproject.blob.core.windows.net/seekoimages/Polonnaruwa.jpg",
    "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=640&h=480&dpr=2",
    "https://images.pexels.com/photos/9013701/pexels-photo-9013701.jpeg?auto=compress&cs=tinysrgb&w=640&h=480&dpr=2",
  ];

  const handleImagePress = (index) => {
    switch (index) {
      case 0:
        navigation.navigate("polonnaruwaPage");
        break;
      case 1:
        navigation.navigate("ellaPage");
        break;
      case 2:
        navigation.navigate("sigiriyaPage");
        break;
      default:
        break;
    }
  };

  const handleSearchButtonPress = () => {
    navigation.navigate("SearchBar"); // Navigate to SearchBarPage when search button is pressed
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Search..." />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearchButtonPress}>
          <Ionicons name="search" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 100 }}>
        <SliderBox
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) => handleImagePress(index)}
          autoplay
          circleLoop
          dotColor="#7F8CE0"
          ImageComponentStyle={{ borderRadius: 15, width: "93%" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    width: "92%",
    top: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 15,
  },
  icon: {
    marginLeft: 10,
  },
});
