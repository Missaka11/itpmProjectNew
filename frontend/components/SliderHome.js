<<<<<<< HEAD
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
=======
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
>>>>>>> 9a04251dc4203d49dd41710eef648f0432dce345
import { Ionicons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

// Import the SearchBar logic
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    // Normalize search query to lowercase
    const normalizedQuery = searchQuery.trim().toLowerCase();

    // Define page routes based on search query
    const pages = {
      galle: 'gallePage',
      polonnaruwa: 'polonnaruwaPage',
      sigiriya: 'sigiriyaPage',
      ella: 'ellaPage',
      hikkaduwa: 'hikkaPage',
      jaffna: 'jaffnaPage',
    };

    // Check if query is a valid page
    if (pages[normalizedQuery]) {
      navigation.navigate(pages[normalizedQuery]);
    } else {
      // Handle query does not match any page
      alert(`Page "${searchQuery}" not found`);
    }
  };

  return (
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        onSubmitEditing={handleSearch} // Trigger search on submit
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

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
      {/* Render the SearchBar component */}
      <SearchBar />

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
