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

const EllaPage = () => {
  const [location, setLocation] = useState(null);
  const [speaking, setSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const locationId = '65fd223af2c636e0f4f63d3a'; // Replace with the ID of the location you want to fetch

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
  "The Nine Arches Bridge is one of the most beautiful landmarks of Sri Lanka and amongst the top placesto visit in Ella. There is an interesting story behind this bridge. When the British stopped the construction of this bridge mid-way due to lack of steel during World War 1, the locals constructed it using stone and bricks. The bridge has stood strong without a single piece of steel since then. The setting of the bridge is extremely charming and is amongst the most popular tourist places in Ella. It is located inside a dense forest near a quaint little village with tea plantations surrounding it. Watching the old world trains pass through this bridge is a sight most loved by the tourists. Location: Between Ella and Damodara Station Timings: The bridge is approachable all day around. However, early morning sunrise is the best time to visit. Price: There is no entry fee.";

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
    {location ? (
      <>
        <Text style={styles.locationName}>{location.location}</Text>
        <Image source={{ uri: location.imagePath }} style={styles.image} />
        <View style={styles.languageButtons}>
          <TouchableOpacity onPress={() => setSelectedLanguage("en")}>
          <Text style={[styles.languageButton, selectedLanguage === "en" ? styles.selectedLanguage : styles.unselectedLanguage]}>
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedLanguage("fr")}>
          <Text style={[styles.languageButton, selectedLanguage === "fr" ? styles.selectedLanguage : styles.unselectedLanguage]}>
              French
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedLanguage("ru")}>
              <Text style={[styles.languageButton, selectedLanguage === "ru" ? styles.selectedLanguage : styles.unselectedLanguage]}>
                Russian
              </Text>
            </TouchableOpacity>
          {/* Add more language buttons as needed */}
        </View>
        <TouchableOpacity onPress={toggleSpeaking} style={styles.speakButton}>
          <Text style={styles.speakButtonText}>
            {speaking ? "Stop Speaking" : "Speak"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.description}>{location.desc}</Text>
        
        
      </>
    ) : (
      <Text>Loading...</Text>
    )}
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
  backgroundColor: "blue",
  padding: 10,
  borderRadius: 5,
  marginTop: 10,
},
speakButtonText: {
  color: "white",
  fontSize: 16,
  fontWeight: "bold",
},
});

export default EllaPage;