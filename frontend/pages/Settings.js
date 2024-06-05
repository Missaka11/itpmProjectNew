import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const SettingsPage = ({ navigation }) => {
  const navigateToDeleteAccount = () => {
    navigation.navigate('DeleteUserScreen');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/e0/8d/6e/e08d6ef241b50288b469bbf38df15984.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToDeleteAccount}
        >
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#FF6347', // Coral color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsPage;
