import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { IP_ADDRESS } from "@env";

const backgroundImage = { uri: 'https://i.pinimg.com/originals/e0/8d/6e/e08d6ef241b50288b469bbf38df15984.jpg' };

const UserProfilePage = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const userId = '66006672c19b1467cc73b3fc'; 
      const response = await axios.get(`http://${process.env.IP_ADDRESS}:8000/api/getUser/${userId}`);
      setUser(response.data); // Set user details in state
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const refreshUserData = navigation.addListener('focus', () => {
      fetchUserData();
    });

    return refreshUserData;
  }, [navigation]);

  const handleDownloadPDF = async () => {
    if (!user) {
      return;
    }

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          padding: 20px;
        }
        .user-details {
          background-color: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          max-width: 80%;
          margin: 0 auto;
        }
        h1 {
          color: #420475;
          font-size: 32px;
          margin-bottom: 30px;
          text-align: center;
        }
        .detail-item {
          margin-bottom: 25px;
        }
        .label {
          font-weight: bold;
          color: #420475;
          font-size: 20px;
        }
        .value {
          color: #007bff;
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <div class="user-details">
        <h1>User Details</h1>
        <div class="detail-item">
          <p><span class="label">First Name:</span> <span class="value">${user.firstName}</span></p>
        </div>
        <div class="detail-item">
          <p><span class="label">Last Name:</span> <span class="value">${user.lastName}</span></p>
        </div>
        <div class="detail-item">
          <p><span class="label">Address:</span> <span class="value">${user.address}</span></p>
        </div>
        <div class="detail-item">
          <p><span class="label">Email:</span> <span class="value">${user.email}</span></p>
        </div>
        <div class="detail-item">
          <p><span class="label">Mobile:</span> <span class="value">${user.mobile}</span></p>
        </div>
        <div class="detail-item">
          <p><span class="label">Password:</span> <span class="value">${user.password}</span></p>
        </div>
      </div>
    </body>
    </html>
    
    `;

    try {
      const { uri } = await printToFileAsync({ html: htmlContent });
      Alert.alert('PDF Generated', `PDF saved to: ${uri}`);

      // Optional: Share the generated PDF
      await shareAsync(uri);

    } catch (error) {
      console.error('Error generating PDF:', error);
      Alert.alert('Error', 'Failed to generate PDF. Please try again.');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        {user ? (
          <>
            <Text style={styles.userName}>{`${user.firstName} ${user.lastName}`}</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.detailBox}>
                <Text style={styles.label}>First Name</Text>
                <Text style={styles.value}>{user.firstName}</Text>
              </View>
              <View style={styles.detailBox}>
                <Text style={styles.label}>Last Name</Text>
                <Text style={styles.value}>{user.lastName}</Text>
              </View>
              <View style={styles.detailBox}>
                <Text style={styles.label}>Address</Text>
                <Text style={styles.value}>{user.address}</Text>
              </View>
              <View style={styles.detailBox}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{user.email}</Text>
              </View>
              <View style={styles.detailBox}>
                <Text style={styles.label}>Mobile</Text>
                <Text style={styles.value}>{user.mobile}</Text>
              </View>
              <View style={styles.detailBox}>
                <Text style={styles.label}>Password</Text>
                <Text style={styles.value}>{user.password}</Text>
              </View>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => navigation.navigate('EditProfile')}
              >
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.editButton, { backgroundColor: '#420475', marginTop: 20 }]}
                onPress={handleDownloadPDF}
              >
                <Text style={styles.buttonText}>Download PDF</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <ActivityIndicator size="large" color="#420475" />
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkred',
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#420475',
  },
  value: {
    fontSize: 18,
    color: '#007bff',
  },
  editButton: {
    marginTop: 30,
    backgroundColor: '#6200EE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UserProfilePage;
