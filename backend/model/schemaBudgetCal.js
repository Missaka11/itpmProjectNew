const mongoose = require("mongoose");

const BudgetCalSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Tamount: {
        type: Number,
        required: true
    },
    expenses: [{
        name: {
          type: String,
          required: true
        },
        amount: {
          type: Number,
          required: true
        }
      }],
});

module.exports = mongoose.model("BudgetCal", BudgetCalSchema)
