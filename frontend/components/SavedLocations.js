import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image = {
  uri: 'https://images.pexels.com/photos/307006/pexels-photo-307006.jpeg?auto=compress&cs=tinysrgb&w=854&h=480&dpr=2',
};

export default function SavedBudgets() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('LocationsScreen'); 
  };

  return (
    
    <TouchableOpacity style={styles.savedLocationsView} onPress={handlePress}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
          <Text style={{ fontSize: 20, color: 'white' }}>Saved Locations</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 130,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
    marginBottom: 6,
  },

});

