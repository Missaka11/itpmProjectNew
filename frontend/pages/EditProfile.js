import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import { IP_ADDRESS } from "@env";

const backgroundImage = { uri: 'https://i.pinimg.com/originals/e0/8d/6e/e08d6ef241b50288b469bbf38df15984.jpg' };

const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchUserData = async () => {
    try {
      const userId = '66006672c19b1467cc73b3fc'; 
      const response = await axios.get(`http://${IP_ADDRESS}:8000/api/getUser/${userId}`);
      setUser(response.data); // Set user details in state
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when component mounts
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const { firstName, lastName, address, email, mobile, password } = user;
      const response = await axios.put(`http://192.168.1.3:8000/api/update/66017d0b1707f39df0e99921`, {
        firstName,
        lastName,
        address,
        email,
        mobile,
        password,
      });
      console.log(response.data);
      setSuccessMessage('Profile updated successfully');
      setErrorMessage('');
      navigation.goBack(); // Navigate back to UserProfilePage after successful update
    } catch (error) {
      console.error('Error updating profile:', error);
      setErrorMessage('Failed to update profile');
      setSuccessMessage('');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Update Profile</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            value={user.firstName}
            onChangeText={(text) => setUser({ ...user, firstName: text })}
            placeholder="Enter your first name"
          />
          
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={user.lastName}
            onChangeText={(text) => setUser({ ...user, lastName: text })}
            placeholder="Enter your last name"
          />
          
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={user.address}
            onChangeText={(text) => setUser({ ...user, address: text })}
            placeholder="Enter your address"
          />
          
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={user.email}
            onChangeText={(text) => setUser({ ...user, email: text })}
            placeholder="Enter your email"
          />
          
          <Text style={styles.label}>Mobile</Text>
          <TextInput
            style={styles.input}
            value={user.mobile}
            onChangeText={(text) => setUser({ ...user, mobile: text })}
            placeholder="Enter your mobile number"
          />
          
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={user.password}
            onChangeText={(text) => setUser({ ...user, password: text })}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleUpdateProfile}
        >
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>

        {successMessage ? (
          <Text style={styles.successMessage}>{successMessage}</Text>
        ) : null}
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
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
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#420475',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: '#420475',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#420475',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  successMessage: {
    color: 'green',
    marginTop: 20,
    fontSize: 16,
  },
  errorMessage: {
    color: 'red',
    marginTop: 20,
    fontSize: 16,
  },
});

export default EditProfile;
