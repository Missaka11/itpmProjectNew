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

const JaffnaPage = () => {
  const [location, setLocation] = useState(null);
  const [speaking, setSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const locationId = "662fd868c1d6d7667b47a33f"; // Replace with the ID of the location you want to fetch

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        `http://${process.env.IP_ADDRESS}:8000/api/locations/${locationId}`
      );
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  let textToSpeak =
    "Jaffna, port, northern Sri Lanka. It is situated on a flat, dry peninsula at the island’s northern tip. The trading centre for the agricultural produce of the peninsula and nearby islands, it is linked with the rest of the country by road and a railway. Jaffna is no longer a major port but conducts some trade with southern India. Fishing is important in the economy.Jaffna was the capital of a Tamil kingdom for centuries before it was conquered by Europeans, and the city still has many distinctive Tamil cultural characteristics. Jaffna fell under Portuguese rule in 1619 and was their last possession in Ceylon (Sri Lanka) before its capture by the Dutch in 1658. The name Jaffna is a Portuguese adaptation of a Tamil word meaning “port of the lyre.” A fort and a church remain from the Dutch period, and near the fort is a famous Hindu temple, Kandaswamy Kovil. The British held Jaffna after 1795 until they relinquished control of the island in 1948. From 1983 to 1995 Jaffna was a stronghold of a Tamil separatist guerrilla group. Its capture by Sri Lankan government forces in 1995 left portions of the city in ruins. Jaffna, however, continued to experience rebel fighting into the 21st century. In December 2004 the city was hit by a large tsunami triggered by a strong earthquake in the Indian Ocean near Indonesia that caused widespread death and destruction.";

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

export default JaffnaPage;
