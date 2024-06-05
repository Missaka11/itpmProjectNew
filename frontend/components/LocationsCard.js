import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { IP_ADDRESS } from "@env";

export default function LocationsCard() {
  const navigation = useNavigation();
  const [locationData, setlocationData] = useState([]);

  // Getting data from backend
  useEffect(() => {
    axios

      .get(`http://${process.env.IP_ADDRESS}:8000/api/locations`)

      .then((res) => {
        setlocationData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCardPress = (item) => {
    // Navigate to a different screen based on item index
    switch (item.index) {
      case 0:
        navigation.navigate("sigiriyaPage");
        break;
      case 1:
        navigation.navigate("ellaPage");
        break;
      case 2:
        navigation.navigate("polonnaruwaPage");
        break;
      case 3:
        navigation.navigate("gallePage");
        break;
      case 4:
        navigation.navigate("jaffnaPage");
        break;
      case 5:
        navigation.navigate("hikkaPage");
        break;
    }
  };

  return (
    <>
      {locationData.map((item, index) => {
        return (
          <View key={item._id}>
            <TouchableOpacity
              onPress={() => handleCardPress({ ...item, index })}
            >
              <View style={styles.MainView}>
                <Image source={{ uri: item.imagePath }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.locationText}>{item.location}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  MainView: {
    height: 130,
    width: 360,
    backgroundColor: "#FFF4CF",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 8,
  },
  image: {
    borderRadius: 8,
    height: 125,
    width: 155,
    marginTop: 2.5,
    marginLeft: 2.5,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 10,
    flex: 1,
  },
  locationText: {
    fontWeight: "bold",
  },
});
