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
import { useNavigation } from "@react-navigation/native";
// import { IP_ADDRESS } from "@env";

export default function TPlans() {
  const navigation = useNavigation();
  const [travelPlanData, setTravelPlanData] = useState([]);

  // Getting data from backend
  useEffect(() => {
    axios
      .get(`http://192.168.1.3:8000/api/travelPlans`) //Use computer ip address for backend url, insted of localhost
      .then((res) => {
        setTravelPlanData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {travelPlanData && travelPlanData.length > 0 ? (
        travelPlanData.map((item) => {
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
                  {/* <Text>{item.imageUrl}</Text> */}
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
                    {/* Map array for display locations one after another */}
                    {item.locations.map((location) => (
                      <Text key={item} style={{ paddingLeft: 10 }}>
                        {location}
                      </Text>
                    ))}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })
      ) : (
        <Text>No travel plans available</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  MainView: {
    height: 130,
    width: 360,
    backgroundColor: "orange",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 8,
  },
});
