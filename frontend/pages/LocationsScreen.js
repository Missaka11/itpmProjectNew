import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const LocationsScreen = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch locations
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://172.28.31.130:8000/api/locations');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const handleRemoveLocation = (itemId) => {
    
    const updatedLocations = locations.filter(item => item._id !== itemId);
    setLocations(updatedLocations);
  };

  const renderLocationItem = ({ item }) => (
    <TouchableOpacity
      style={styles.locationItem}
      onPress={() => {
        Alert.alert(
          'Remove Location',
          'Are you sure you want to remove this location?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Remove',
              onPress: () => handleRemoveLocation(item._id),
              style: 'destructive',
            },
          ],
          { cancelable: true }
        );
      }}
    >
      <ImageBackground source={{ uri: item.imagePath }} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.locationName}>{item.location}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={(item) => item._id}
        renderItem={renderLocationItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationItem: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    width: 350,
    height: 130,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  locationName: {
    fontSize: 20,
    color: 'white',
  },
});

export default LocationsScreen;
