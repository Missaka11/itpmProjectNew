import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { IP_ADDRESS } from "@env";

const BudgetListPage = () => {
  const [budgets, setBudgets] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchBudgets();
    });

    return unsubscribe;
  }, [navigation]);

  //get all budgets
  const fetchBudgets = async () => {
    try {
      const response = await axios.get(`http://192.168.1.3:8000/api/budget`);
      setBudgets(response.data);
    } catch (error) {
      console.error("Error fetching budgets:", error);
    }
  };

  //delete budget
  const deleteBudget = async (id) => {
    try {
      await axios.delete(`http://192.168.1.3:8000/api/budget/${id}`);
      // Remove the deleted budget from the state
      setBudgets(budgets.filter((budget) => budget._id !== id));
      Alert.alert("Success", "Budget deleted successfully!");
    } catch (error) {
      console.error("Error deleting budget:", error);
      Alert.alert("Error", "Failed to delete budget. Please try again later.");
    }
  };

  // Update budget
  const updateBudget = async (budget) => {
    try {
      // Navigate to BudgetCalEdit and pass the budget data
      navigation.navigate("BudgetCalEdit", { budget });
    } catch (error) {
      console.error("Error updating budget:", error);
      Alert.alert("Error", "Failed to update budget. Please try again later.");
    }
  };

  const renderBudgetItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.amount}>Rs. {item.Tamount}</Text>
      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => updateBudget(item)}
      >
        <Text style={styles.updateText}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteBudget(item._id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Saved Budgets</Text>
      <FlatList
        data={budgets}
        renderItem={renderBudgetItem}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    left: 100,
  },
  card: {
    backgroundColor: "lightgrey",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: "#7F8CE0",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "flex-end",
  },
  updateText: {
    color: "white",
  },
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "flex-end",
  },
  deleteText: {
    color: "white",
  },
});

export default BudgetListPage;
