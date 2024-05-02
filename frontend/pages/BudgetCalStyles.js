import { StyleSheet } from "react-native";
// styles sheet to store all the styles in one place
const BudgetCalStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rowSave: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    left: 105,
    top: -55
  },
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  heading: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 30,
  },
  addButton: {
    padding: 10,
    margin: 10,
  },
  
  heading2: {
    color: "black",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  heading3: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
  label: {
    color: "black",
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: 10,
  },
  expenseTile: {
    // column with 3 cells
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgrey",
    width: "95%",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  expenseTileText: {
    fontSize: 20,
    width: "22%",
    textAlign: "center",
  },
  formAdd: {
    // display: "none",
  },
  textInput: {
    borderRadius: 12,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  textInputTitle: {
    borderRadius: 12,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: 200,
    left: 15
  },
  totalExpensesText: {
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "white",
    borderRadius: 8,
  },
  totalExpensesContainer: {
    backgroundColor: "#7F8CE0",
    padding: 8,
    margin: 50,
    borderRadius: 10,
  },
});
export default BudgetCalStyles;
