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
import { IP_ADDRESS } from "@env";

const PolonnaruwaPage = () => {
  const [location, setLocation] = useState(null);
  const [speaking, setSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const locationId = "6605d138ecb26ccbdb4e2618";

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        `http://${IP_ADDRESS}:8000/api/locations/${locationId}`
      );
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  let textToSpeak =
    "Polonnaruwa is a city in Sri Lanka, known for being the country's second ancient city after Anuradhapura. It was established as a military post by the Sinhalese kingdom in the 10th century and became the capital of Sri Lanka after the destruction of Anuradhapura in 993 AD. The city remained a prosperous kingdom for the next 3 centuries, ruled by both the Chola and Sinhalese dynasties, before being eventually abandoned. Today, Polonnaruwa is a UNESCO World Heritage Site and a major tourist destination in Sri Lanka. The city is famous for its archaeological ruins, which include palaces, monasteries, Buddhist and Hindu temples, and dagobas (stupa-like structures containing relics). One of the most impressive sights in Polonnaruwa is the Gal Vihara, a rock-cut temple complex that contains four massive statues of Buddha.Another interesting site is the Royal Palace, which was once a massive structure with 7 floors. Today, only the walls of the palace remain, but they are still impressive in their scale. Polonnaruwa is also home to the Parakrama Samudra, a vast man-made lake that was built by King Parakramabahu I in the 12th century. The lake is still in use today and is a popular spot for swimming, boating, and fishing.";

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

export default PolonnaruwaPage;
