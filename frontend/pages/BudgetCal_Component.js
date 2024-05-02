import { Alert, Button, ScrollView, Text, View } from "react-native";
import BudgetCalStyles from "./BudgetCalStyles";

export default function BudgetCalComponent({
	expenses,
	setExpenses,
}) {
	return (
		<ScrollView
			style={{
				marginBottom: 80,
			}}
		>
			{expenses.map((expense) => {
				console.log(expense);
				return (
					<ExpenseListTile
						key={expense.id}
						expense={expense}
						expenses={expenses}
						setExpenses={setExpenses}
					/>
				);
			})}
		</ScrollView>
	);
}
const ExpenseListTile = ({
	expense,
	expenses,
	setExpenses,
}) => {
	return (
		<View style={BudgetCalStyles.expenseTile}>
			<Text style={BudgetCalStyles.expenseTileText}>{expense.name}</Text>
		
			<Text style={BudgetCalStyles.expenseTileText}>Rs.{expense.amount}</Text>
			<Button
				onPress={() => {
					Alert.alert("Delete", "Are you sure you want to delete?", [
						{
							text: "Yes",
							onPress: () => {
								let newExpenses = [...expenses];
								let index = newExpenses.findIndex(
									(item) => item.id == expense.id
								);
								newExpenses.splice(index, 1);
								setExpenses(newExpenses);
								
							},
						},
						{
							text: "No",
							onPress: () => {
								console.log("No");
							},
						},
					]);
				}}
				title="Delete"
			/>
		</View>
	);
};
