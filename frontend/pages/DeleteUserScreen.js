import React, { useState } from 'react';
import { View, Text, Button, Alert, ImageBackground, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const DeleteUserScreen = () => {
  const [selectedReason, setSelectedReason] = useState(null);
  const navigation = useNavigation(); // Access navigation object

  const handleDeleteAccount = async () => {
    if (!selectedReason) {
      Alert.alert('Error', 'Please select a reason for deleting your account.');
      return;
    }

    try {
      const userId = '663baecf381a3ceb0c1a186a'; 
      const response = await axios.delete(`http://192.168.8.200:8000/api/delete/${userId}`);
      if (response.data.message === 'User deleted successfully') {
        Alert.alert('Success', 'Account deleted successfully', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('SignUp'), // Navigate to Sign Up screen
          },
        ]);
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      Alert.alert('Error', 'Failed to delete account. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2023/11/07/22/56/skyscraper-8373617_1280.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Are you sure you want to delete your account?</Text>

        <Text style={styles.description}>
          Deleting your account is irreversible. You will lose access to all your data and
          will be logged out from the app.
        </Text>

        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Select reason for deletion:</Text>
          <View style={styles.radioButton}>
            <Button
              title="I don't feel safe using this app"
              onPress={() => setSelectedReason('notSafe')}
              color={selectedReason === 'notSafe' ? 'green' : '#888888'}
            />
          </View>
          <View style={styles.radioButton}>
            <Button
              title="I have another account"
              onPress={() => setSelectedReason('anotherAccount')}
              color={selectedReason === 'anotherAccount' ? 'green' : '#888888'}
            />
          </View>
          <View style={styles.radioButton}>
            <Button
              title="Other"
              onPress={() => setSelectedReason('other')}
              color={selectedReason === 'other' ? 'green' : '#888888'}
            />
          </View>
        </View>

        {/* Delete Account button */}
        {selectedReason && (
          <Button
            title="Delete Account"
            onPress={handleDeleteAccount}
            color="red"
            accessibilityLabel="Delete Account"
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  radioContainer: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  radioLabel: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  radioButton: {
    marginBottom: 10,
  },
});

export default DeleteUserScreen;
