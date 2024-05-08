import * as React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSidebar} style={styles.menuIcon}>
        <Image
          resizeMode="cover"
          source={require("../assets/menu.png")}
          style={styles.menuImage}
        />
      </TouchableOpacity>
      

      {isSidebarOpen && (
        <View style={styles.sidebar}>

          <Text style={styles.sidebarItem}>Home</Text>
          <Text style={styles.sidebarItem}>Profile</Text>
          <Text style={styles.sidebarItem}>Budget Cal</Text>
          <Text style={styles.sidebarItem}>Settings</Text>
        </View>
      )}

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  menuIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  menuImage: {
    width: 30,
    height: 30,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 250,
    height: "100%",
    padding: 20,
  },
  sidebarItem: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 50,
    marginBottom: 10,
  },
  
  
});

export default Header;