import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Speech from "expo-speech";
import TravelPlansBtn from "../components/TravelPlansBtn";

const GallePage = () => {
  const [location, setLocation] = useState(null);
  const [speaking, setSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const locationId = "662fd71ac1d6d7667b47a33a"; // Replace with the ID of the location you want to fetch

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.19:8000/api/locations/${locationId}`
      );
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  let textToSpeak =
    "Galle is located in the south of Sri Lanka. A journey to the past sees the remnants of a Dutch past at a World Heritage Site. Galle has been the emporium of foreign trade since the dawn of commerce. The Dutch Fort, which has been declared a World Heritage Site, surrounds the older part of the town and is situated on a headland of which three sides overlook the sea. The ramparts of the Fort are over 2.5 km in circumference and provide a pleasant and interesting walk. The historian Sir Emerson Tennant claimed that Galle was the ancient biblical city of Tarshish. This city is said to have traded with King Solomon, the Persians and the Egyptians. In 1505 a Portuguese fleet led by Lorenzo de Almeida heading for the Maldives drifted accidentally into Galle. On hearing a cock crowing (cock means ”Galo” in Portuguese), it is said that they gave the town its name. Another explanation for the name is from the Sinhala name for rock ‘Gala’, plenty of which are found in the harbour area.";

  const toggleSpeaking = async () => {
    try {
      if (speaking) {
        Speech.stop();
      } else {
        Speech.speak(textToSpeak, { language: selectedLanguage });
      }
      setSpeaking(!speaking);
    } catch (error) {
      console.error("Speech synthesis error:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {location ? (
          <>
            <Text style={styles.locationName}>{location.location}</Text>
            <Image source={{ uri: location.imagePath }} style={styles.image} />
            <View style={styles.languageButtons}>
              <TouchableOpacity onPress={() => setSelectedLanguage("en")}>
                <Text
                  style={[
                    styles.languageButton,
                    selectedLanguage === "en"
                      ? styles.selectedLanguage
                      : styles.unselectedLanguage,
                  ]}
                >
                  English
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedLanguage("fr")}>
                <Text
                  style={[
                    styles.languageButton,
                    selectedLanguage === "fr"
                      ? styles.selectedLanguage
                      : styles.unselectedLanguage,
                  ]}
                >
                  French
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedLanguage("ru")}>
                <Text
                  style={[
                    styles.languageButton,
                    selectedLanguage === "ru"
                      ? styles.selectedLanguage
                      : styles.unselectedLanguage,
                  ]}
                >
                  Russian
                </Text>
              </TouchableOpacity>
              {/* Add more language buttons as needed */}
            </View>
            <TouchableOpacity
              onPress={toggleSpeaking}
              style={styles.speakButton}
            >
              <Text style={styles.speakButtonText}>
                {speaking ? "Stop Speaking" : "Speak"}
              </Text>
            </TouchableOpacity>
            <Text style={styles.description}>{location.desc}</Text>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
      <TravelPlansBtn />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  locationName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
    textAlign: "justify",
  },
  image: {
    width: 350,
    height: 200,
    marginBottom: 10,
    marginTop: 20,
  },
  languageButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  languageButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
    paddingHorizontal: 10,
  },
  selectedLanguage: {
    color: "green",
  },
  unselectedLanguage: {
    color: "gray",
  },
  speakButton: {
    backgroundColor: "#33D4FF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  speakButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GallePage;
