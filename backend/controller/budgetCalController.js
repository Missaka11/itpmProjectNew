const BudgetModel = require('../model/schemaBudgetCal');

// Controller functions
const createBudget = async (req, res) => {
  try {
    const { title, Tamount, expenses } = req.body;
    const newBudget = new BudgetModel({
      title,
      Tamount,
      expenses
    });
    const savedBudget = await newBudget.save();
    res.status(201).json(savedBudget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBudgets = async (req, res) => {
  try {
    const budgets = await BudgetModel.find();
    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBudgetById = async (req, res) => {
  try {
    const budgetId = req.params.id;
    const budget = await BudgetModel.findById(budgetId);
    if (!budget) {
      res.status(404).json({ message: 'Budget not found' });
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBudget = async (req, res) => {
  try {
    const budgetId = req.params.id;
    const { title, Tamount, expenses } = req.body;
    const updatedBudget = await BudgetModel.findByIdAndUpdate(
      budgetId,
      { title, Tamount, expenses },
      { new: true }
    );
    if (!updatedBudget) {
      res.status(404).json({ message: 'Budget not found' });
      return;
    }
    res.status(200).json(updatedBudget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBudget = async (req, res) => {
  try {
    const budgetId = req.params.id;
    const deletedBudget = await BudgetModel.findByIdAndDelete(budgetId);
    if (!deletedBudget) {
      res.status(404).json({ message: 'Budget not found' });
      return;
    }
    res.status(200).json(deletedBudget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBudget,
  getBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget
};