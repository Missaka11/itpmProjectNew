//import { Picker } from "@react-native-picker/picker";
import { Button, Text, TextInput, View } from "react-native";
import BudgetCalStyles from "./BudgetCalStyles";

// Define the Addform component which is used to add new expenses
export default function AddBudgetCal({
	name,
	setName,
	amount,
	setAmount,
	setExpenses,
	expenses,
	setAddForm,
}) {
	return (
		<View>
			<Text style={BudgetCalStyles.heading3}>Add Here</Text>

			{/* Input field for expense name */}
			<Text style={BudgetCalStyles.label}>Expense Name</Text>
			<TextInput
				onChangeText={(value) => setName(value)}
				value={name}
				style={BudgetCalStyles.textInput}
				placeholder="Enter the expense name"
			/>

			{/* Input field for expense amount */}
			<Text style={BudgetCalStyles.label}>Amount</Text>
			<TextInput
				keyboardType="numeric"
				onChangeText={(value) => {
					// Ensure only numeric values are entered for the amount
					value = value.replace(/[^0-9]/g, "");
					setAmount(value);
				}}
				value={amount}
				style={BudgetCalStyles.textInput}
				placeholder="Amount"
			/>

			{/* Dropdown to select expense category */} 
			


			{/* Buttons to add or cancel expense */}
			<View style={BudgetCalStyles.row}>
				{/* Add Expense button */}
				<Button
					onPress={() => {
						let amountNumber = parseInt(amount);
						if (amountNumber <= 0 || name == "") {
							// Validation: Ensure valid amount 
							// and name are entered
							alert("Please enter a valid amount and name");
							return;
						}

						// Add the new expense to the list of expenses
						setExpenses([
							...expenses,
							{
								id: new Date().getTime(),
								name,
								amount: amountNumber,
							},
						]);

						// Reset form fields and close the form
						setAddForm(false);
						setName("");
						setAmount("");
						
					}}
					title="Add Expense"
                    color="#7F8CE0"
				/>

				{/* Cancel button to close the form
					without adding an expense */}
				<Button
					onPress={() => {
						setAddForm(false);
					}}
					title="Cancel"
                    color="#7F8CE0"
				/>
			</View>
		</View>
	);
}