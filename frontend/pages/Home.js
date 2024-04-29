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
import { Ionicons } from "@expo/vector-icons";
import LocationsCard from "../components/LocationsCard";

const Home = () => {
  return (
    <View style={[styles.home, styles.homeLayout]}>
      {/*search bar*/}

      {/*background*/}
      <Image
        style={[styles.backgroundIcon, styles.backgroundIconPosition]}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <ScrollView>
        {/*text*/}
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

  menuLayout: {
    height: 20,
    position: "absolute",
  },
  home1Typo: {
    textAlign: "left",
    fontWeight: "600",
  },
  backgroundIconPosition: {
    top: 180,
    position: "absolute",
  },
  menuIcon: {
    top: 0,
    left: 0,
    width: 25,
  },
  home1: {
    top: 3,
    left: 41,
    fontSize: 16,
    position: "absolute",
    textAlign: "left",
    fontWeight: "600",
  },
  menuParent: {
    top: 25,
    width: 87,
    left: 17,
  },
  backgroundIcon: {
    left: -75,
    width: 655,
    height: 696,
    overflow: "hidden",
  },
  makeAdventuresMemories: {
    fontSize: 21,
    width: 170,
    textAlign: "left",
    fontWeight: "600",
    left: 17,
    top: 200,
  },
  home: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 640,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

export default Home;
