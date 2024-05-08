const express = require('express');
const router = express.Router();
const {getBudgets, createBudget, getBudgetById, updateBudget, deleteBudget} = require('../controller/budgetCalController');

router.route('/').get(getBudgets).post(createBudget)
router.route('/:id').get(getBudgetById).put(updateBudget).delete(deleteBudget)

module.exports = router;