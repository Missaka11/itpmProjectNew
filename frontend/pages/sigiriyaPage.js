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
// import { IP_ADDRESS } from "@env";


const SigiriyaPage = () => {
  const [location, setLocation] = useState(null);
  const [speaking, setSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); 
  const locationId = "65fd1ee6f2c636e0f4f63d38"; 
  

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.2:8000/api/locations/${locationId}`
      );
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  let textToSpeak =
    "Sigiriya Lion Rock is an ancient rock fortress known for its massive column of rock that reaches nearly 200 meters high. The site dates back to the reign of King Kasyapa (477-495 AD), who chose this site as his new capital. He decorated the walls with frescoes, and built an impressive palace right on top of the rock column, accessible only through the mouth of an enormous carved lion. WHAT IS THE BEST TIME TO VISIT SIGIRIYA? January to April is the best time to visit Sigiriya when the climate is moderate and suitable for day trips.May to August is the dry season in Sigiriya, and the place has a tropical climate with a humidity of 80% all year round. However, the rest of the year sees average weather as well with the highest temperature going to around 31 degrees Celsius. October-December are the wettest months, and it’s best to avoid Sigiriya anytime during these months.If you’re okay with braving a little rainfall, then the early monsoon months are a lovely time to visit as well. The Sigiriya rock has a height of around 660 ft, and it gives a fantastic view to the tourists in all of Sri Lanka. It’s a World Heritage Site as declared by UNESCO in 1982, and a trip to Sri Lanka would be incomplete without a visit to this place.However, the best time to visit Sigiriya Rock is at around 7 AM. It has the least number of the crowd during this hour of the day and also the light is good enough for clicking some of the great photographs. Or you can also plan your trip to Sigiriya late in the afternoon for the same reason. Avoiding weekends and public holidays are the best way to explore the rock that includes beautiful fresco art.The off-season at Sigiriya is from October to December when the site witnesses heavy rains. Climbing the rock is relatively tricky during the monsoons; moreover, the beautiful views at the summit can become obscured by the clouds.";

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

export default SigiriyaPage;
