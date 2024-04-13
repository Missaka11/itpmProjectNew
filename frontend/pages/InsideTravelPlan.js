import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function InsideTravelPlan() {
  const navigation = useNavigation();
  const route = useRoute();
  const [plan, setPlan] = useState({
    id: "",
    budget: "",
    locations: [],
  });
  // const ID = route.params.id;

  const image = {
    uri: "https://cdn.pixabay.com/photo/2023/11/07/22/56/skyscraper-8373617_1280.jpg",
  };
  const locationImage = {
    uri: route.params.imageUrl,
  };

  // for get the old data
  useEffect(() => {
    setPlan(() => ({
      id: route.params.id,
      budget: route.params.budget,
      imageUrl: route.params.imageUrl,
      locations: route.params.locations,
    }));
  }, []);

  // loop according to travel plan locations count
  const locationsData = [];

  for (let i = 0; i < plan.locations.length; i++) {
    locationsData.push(
      <Text
        key={i}
        style={{
          marginBottom: 8,
          marginLeft: 10,
        }}
      >
        {i + 1}. {plan.locations[i]}
      </Text>
    );
  }

  // function

  return (
    <View style={styles.container} key={plan.id}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.mainBox}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                width: 345,
                height: 150,
                borderRadius: 8,
                marginTop: 10,
              }}
              source={locationImage}
            ></Image>
          </View>

          <View style={styles.details}>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 15,
                marginBottom: 10,
              }}
            >
              {plan.budget}
            </Text>
            {/* <Text>{plan.imageUrl}</Text> */}
            <View>{locationsData}</View>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.locationBtn}
              onPress={() => {
                navigation.navigate("Locations Map", {
                  id: plan.id,
                  locations: plan.locations,
                });
              }}
            >
              <Text>Locations on map</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  mainBox: {
    marginTop: 10,
    height: "95%",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 8,
    marginLeft: "auto",
    marginRight: "auto",
  },
  details: {
    backgroundColor: "orange",
    margin: 10,
    borderRadius: 8,
    height: "63%",
  },
  locationBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "aqua",
    borderRadius: 8,
    height: 40,
    width: 240,
    top: 35,
  },
});
