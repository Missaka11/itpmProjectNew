import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
// import { IP_ADDRESS } from "@env";

const image = {
  uri: "https://w.forfun.com/fetch/00/0043a0b0e55215af9fd47074c5cf9497.jpeg",
};
function SignUp() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://192.168.1.19:8000/api/register`,
        {
          firstName,
          lastName,
          address,
          email,
          mobile,
          password,
          status: 1,
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", response.data.message);
        navigation.navigate("Home Page");
      } else {
        Alert.alert("Error", response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
          {/* <Image style={styles.logo} source={require('../../assets/userlogo.png')} /> */}
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>User Register</Text>

          <View style={styles.action}>
            <MaterialIcons name="person" size={24} color="#420475" />
            <TextInput
              placeholder="First Name"
              style={styles.textInput}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View style={styles.action}>
            <MaterialIcons name="person" size={24} color="#420475" />
            <TextInput
              placeholder="Last Name"
              style={styles.textInput}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={styles.action}>
            <MaterialIcons name="home" size={24} color="#420475" />
            <TextInput
              placeholder="Address"
              style={styles.textInput}
              value={address}
              onChangeText={setAddress}
            />
          </View>

          <View style={styles.action}>
            <MaterialIcons name="email" size={24} color="#420475" />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.action}>
            <MaterialIcons name="phone" size={24} color="#420475" />
            <TextInput
              placeholder="Mobile no"
              style={styles.textInput}
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

          <View style={styles.action}>
            <MaterialIcons name="lock" size={24} color="#420475" />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* <View style={styles.action}>
                <MaterialIcons name="lock" size={24} color="#420475" /> 
                    <TextInput placeholder="Re-Enter Password" 
                    style={styles.textInput} 
                    secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword} 
                     />
                </View> */}

          <View style={styles.bottonSet}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.textSign}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textSign}>login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    paddingHorizontal: 20,
    paddingVertical: 50,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  loginContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text_header: {
    color: "#420475",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#420475",
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  forgetPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#420475",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 0,
  },

  bottonSet: {
    marginTop: 40,
  },

  textSign: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SignUp;
