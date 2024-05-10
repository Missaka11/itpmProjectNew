import * as React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import SliderHome from "../components/SliderHome";
import LocationsCard from "../components/LocationsCard";

const Home = () => {
  return (
    <View style={[styles.home, styles.homeLayout]}>
      <Image
        style={[styles.backgroundIcon, styles.backgroundIconPosition]}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <ScrollView>
        <Text
          style={[styles.makeAdventuresMemories, styles.backgroundIconPosition]}
        >{`Make Adventures
Memories `}</Text>
        <SliderHome />

        <Text style={{ fontSize: 18, bottom: -25, left: 17, color: "white" }}>
          Other Locations
        </Text>

        <View style={{ alignItems: "center", top: 50 }}>
          <LocationsCard />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    overflow: "hidden",
  },
  backgroundIconPosition: {
    top: 70,
    position: "absolute",
  },
  backgroundIcon: {
    left: -75,
    width: 655,
    height: 797,
    overflow: "hidden",
  },
  makeAdventuresMemories: {
    fontSize: 21,
    fontWeight: "600",
    left: 17,
  },
  home: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default Home;
