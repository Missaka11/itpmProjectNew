//import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, TextInput, View, ScrollView } from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from '@react-navigation/native';
import BudgetCalStyles from "./BudgetCalStyles";
import AddBudgetCal from "./Add_BudgetCal";
import BudgetCalComponent from "./BudgetCal_Component";


//export default function BudgetCalHome() {
export default function BudgetCalHome() {
  // Define state variables using the useState hook
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [Tamount, setTAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);
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

  //post
  const saveBudget = async () => {
    try {
      // Make a POST request to your backend API endpoint
      const response = await axios.post(
        "http://192.168.8.102:8000/api/budget",
        {
          title: title,
          Tamount: totalExpenses,
          expenses: expenses,
        }
      );

      console.log("Budget saved successfully:", response.data);

      // Reset form fields after successful save
      setTitle("");
      setTAmount(0);
      setExpenses([]);
    } catch (error) {
      console.error("Error saving budget:", error);
    }
  };
  //navigate to budgetlist
  const navigation = useNavigation();
  const navigateToBudgetListPage = () => {
    navigation.navigate("BudgetListPage"); 
  };

  // Render the components and UI
  return (
    
    <SafeAreaView style={BudgetCalStyles.container}>
      <ScrollView>
      <Text style={BudgetCalStyles.heading}>Budget Calculator</Text>

      {/* Input field for title */}
      <Text></Text>

      <TextInput
        onChangeText={(value) => setTitle(value)}
        value={title}
        style={BudgetCalStyles.textInputTitle}
        placeholder="Enter the title"
      />

      

      <View style={BudgetCalStyles.rowSave}>
        <Button
          color="#7F8CE0"
          style={BudgetCalStyles.saveButton}
          title="Save for later"
          onPress={saveBudget}
        />
      </View>

      {/* Display total expenses */}
      <View style={BudgetCalStyles.totalExpensesContainer}>
        <Text style={BudgetCalStyles.totalExpensesText}>
          Total Budget: Rs.{totalExpenses}
        </Text>
      </View>

      {/* Conditional rendering: If addForm is true, 
				render the Addform component */}
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
      </ScrollView>
    </SafeAreaView>
  );
}