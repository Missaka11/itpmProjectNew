import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    // Normalize search query to lowercase
    const normalizedQuery = searchQuery.trim().toLowerCase();

     // Define page routes based on search query
     const pages = {
      galle: 'gallePage',
      polonnaruwa: 'polonnaruwaPage',
      sigiriya: 'sigiriyaPage',
      ella: 'ellaPage',
      hikkaduwa: 'hikkaPage',
      jaffna: 'jaffnaPage',
    };

    // Check if query is a valid page
    if (pages[normalizedQuery]) {
      navigation.navigate(pages[normalizedQuery]);
    } else {
      // Handle query does not match any page
      alert(`Page "${searchQuery}" not found`);
    }
  };

  return (
    <ImageBackground source={{ uri: "https://i.pinimg.com/originals/e0/8d/6e/e08d6ef241b50288b469bbf38df15984.jpg" }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'top', 
    opacity: 0.7,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SearchBar;