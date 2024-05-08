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

const HikkaPage = () => {
  const [location, setLocation] = useState(null);
  const [speaking, setSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const locationId = "6634e0e39b4d6d6907fd90e1"; // Replace with the ID of the location you want to fetch

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
    "Certainly! Hikkaduwa is a picturesque paradise located on the southern coast of Sri Lanka. Its pristine sands, azure waters, and vibrant marine life make it one of the best beaches in Sri Lanka. Visitors can indulge in exciting water sports like surfing, savor delicious seafood curries, and even book relaxing massages by the beach. For those interested in culture, there are fascinating Buddhist temples to explore in Hikkaduwa. The area is approximately 100 kilometers south of Colombo and accessible by bus, train, or even a Tuk Tuk ride from Colombo. Whether you seek relaxation or adventure, Hikkaduwa promises an unforgettable experience.";

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

export default HikkaPage;
