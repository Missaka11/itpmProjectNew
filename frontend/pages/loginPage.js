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
import { IP_ADDRESS } from "@env";

const image = {
  uri: "https://i.pinimg.com/originals/e0/8d/6e/e08d6ef241b50288b469bbf38df15984.jpg",
};
function LoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://${IP_ADDRESS}:8000/api/login`, {
        email,
        password,
      });
      const userData = response.data.user;
      console.log(userData);
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}></View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Login</Text>
          <View style={styles.action}>
            <MaterialIcons name="email" size={24} color="#420475" />
            <TextInput
              placeholder="Mobile or Email"
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
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
          <TouchableOpacity style={styles.forgetPassword}>
            <Text style={{ color: "#420475", fontWeight: "700" }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
          <View style={styles.bottonSet}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.textSign}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.textSign}>User Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("TouristSignUp");
              }}
            >
              <Text style={styles.textSign}>Tour Guide SignUp</Text>
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

export default LoginPage;
