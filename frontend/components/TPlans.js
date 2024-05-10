import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function TPlans() {
  const navigation = useNavigation();
  const route = useRoute(); // Import useRoute hook to access route params
  const [travelPlanData, setTravelPlanData] = useState([]);

  // Getting data from backend
  useEffect(() => {
    axios
      .get(`http://${process.env.IP_ADDRESS}:8000/api/travelPlans`)
      .then((res) => {
        setTravelPlanData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const mainLocation = route.params.location;

  return (
    <>
      {travelPlanData
        .filter((item) => item.heading.includes(mainLocation)) // Filter plans with main location
        .map((item) => {
          return (
            <View key={item._id}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Inside Travel Plan", {
                    id: item._id,
                    budget: item.budget,
                    locations: item.locations,
                    imageUrl: item.imageUrl,
                    // text: item.text,
                  });
                }}
              >
                <View style={styles.MainView}>
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={{
                      borderRadius: 8,
                      height: 125,
                      width: 155,
                      marginTop: 2.5,
                      marginLeft: 2.5,
                    }}
                  />
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{
                        paddingLeft: 10,
                        paddingTop: 8,
                        paddingBottom: 8,
                        fontWeight: "bold",
                      }}
                    >
                      {item.budget}
                    </Text>
                    {item.locations.map((location, index) => (
                      <Text key={index} style={{ paddingLeft: 10 }}>
                        {location}
                      </Text>
                    ))}
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
    backgroundColor: "#FEB941",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 8,
  },
});
