import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SavedLocations from "../components/SavedLocations";
import SavedBudgects from "../components/SavedBudgects";
import ProfileInfoBtn from "../components/ProfileInfoBtn";
import TourGuideSwitch from "../components/TourGuideSwitch";
import { AntDesign } from "@expo/vector-icons";

const image = {
  uri: "https://cdn.pixabay.com/photo/2023/11/07/22/56/skyscraper-8373617_1280.jpg",
};

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* Profile Picture */}
        <View style={styles.profilePic}>
          <TouchableOpacity style={styles.profilePicAddBtn}>
            <AntDesign
              name="plus"
              size={24}
              color="black"
              style={{ alignSelf: "center", top: 3 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainBox}>
          <Text style={styles.userName}>User name</Text>

          <View style={styles.TourGuideSwitchView}>
            <Text style={{ marginRight: 20 }}>Tour Guiding</Text>
            <TourGuideSwitch />
          </View>

          <View style={styles.SavedItems}>
            <SavedLocations />
            <SavedBudgects />
          </View>

          <View style={styles.ButtonContainer}>
            <ProfileInfoBtn />
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
    // justifyContent: "center",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    top: 70,
  },
  mainBox: {
    marginTop: "18%",
    height: "90%",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 8,
    marginLeft: "auto",
    marginRight: "auto",
  },
  TourGuideSwitchView: {
    marginRight: 20,
    marginLeft: "auto",
    top: "20%",
    width: 180,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  profilePic: {
    position: "absolute",
    top: 10,
    zIndex: 1,
    width: 120,
    height: 120,
    backgroundColor: "orange",
    alignSelf: "center",
    borderRadius: 60,
  },
  profilePicAddBtn: {
    position: "absolute",
    top: 80,
    right: -3,
    zIndex: 1,
    width: 30,
    height: 30,
    backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 60,
  },
  SavedItems: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
    top: "20%",
  },
  ButtonContainer: {
    top: "40%",
  },
});
