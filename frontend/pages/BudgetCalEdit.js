import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Alert,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import BudgetCalStyles from "./BudgetCalStyles";
import AddBudgetCal from "./Add_BudgetCal";
import BudgetCalComponent from "./BudgetCal_Component";
import { IP_ADDRESS } from "@env";

export default function BudgetCalEdit() {
  const navigation = useNavigation();
  const route = useRoute();

  // Extract the budget data passed from BudgetListPage.js
  const { budget } = route.params;

  // Define state variables using the useState hook
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState(budget.title);
  const [expenses, setExpenses] = useState(budget.expenses);
  const [addForm, setAddForm] = useState(false);

  // Function to open the add expense form
  const addExpense = () => {
    setAddForm(true);
  };

  // Calculate total expenses
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  // Function to update the budget
  const updateBudget = async () => {
    try {
      // Calculate total amount (Tamount) by summing up all expenses
      const totalAmount = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
      );
      // Send PUT request to update the budget
      await axios.put(`http://${IP_ADDRESS}:8000/api/budget/${budget._id}`, {
        title: title,
        expenses: expenses,
        Tamount: totalAmount, // Update Tamount with the calculated total amount
      });
      Alert.alert("Scouccess", "Budget updated successfully!");
      // Navigate back to BudgetListPage.js after successful update
      navigation.navigate("BudgetListPage");
    } catch (error) {
      console.error("Error updating budget:", error);
      // Handle error
    }
  };

  return (
    <SafeAreaView style={BudgetCalStyles.container}>
      <ScrollView>
        <Text style={BudgetCalStyles.heading}>Edit Budget</Text>

        {/* Input field for title */}
        <TextInput
          onChangeText={(value) => setTitle(value)}
          value={title}
          style={BudgetCalStyles.textInputTitle}
          placeholder="Enter the title"
        />

        <View style={BudgetCalStyles.totalExpensesContainer}>
          <Text style={BudgetCalStyles.totalExpensesText}>
            Total Budget: Rs.{totalExpenses}
          </Text>
        </View>

        {/* Conditional rendering: If addForm is true, render the Addform component */}
        {addForm == true ? (
          <AddBudgetCal
            name={name}
            setName={setName}
            amount={amount}
            setAmount={setAmount}
            setExpenses={setExpenses}
            expenses={expenses}
            setAddForm={setAddForm}
          />
        ) : (
          /* If addForm is false, render the "Add Expense" button */
          <View style={BudgetCalStyles.row}>
            <Button
              onPress={addExpense}
              color="#7F8CE0"
              style={BudgetCalStyles.addButton}
              title="Add Expense"
            />
          </View>
        )}

        {/* Render the ExpenseComponent */}
        <BudgetCalComponent expenses={expenses} setExpenses={setExpenses} />

        {/* Button to update the budget */}
        <View style={BudgetCalStyles.rowSave}>
          <Button
            color="#7F8CE0"
            style={BudgetCalStyles.saveButton}
            title="Update Budget"
            onPress={updateBudget}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
