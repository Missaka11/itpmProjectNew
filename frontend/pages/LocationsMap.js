import { StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import { IP_ADDRESS } from "@env";
import { useRoute } from "@react-navigation/native";

export default function LocationsMap() {
  const [locationCodinates, setLocationCodinates] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const route = useRoute();

  // Getting locationCodinates from backend
  useEffect(() => {
    axios
      .get(`http://${IP_ADDRESS}:8000/api/locationCodinates`)
      .then((res) => {
        setLocationCodinates(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Filtering locations based on route params
  useEffect(() => {
    if (locationCodinates.length > 0 && route.params.locations) {
      const locations = route.params.locations || "";
      if (locations) {
        const filtered = locationCodinates.filter((location) =>
          locations.includes(location.name)
        );
        setFilteredLocations(filtered);
      }
    }
  }, [locationCodinates, route.params.locations]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 7.8731,
          longitude: 80.7718,
          latitudeDelta: 2.5,
          longitudeDelta: 2.5,
        }}
      >
        {filteredLocations.map((item) => (
          <Marker
            key={item._id}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            title={item.name}
            getCamera
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
