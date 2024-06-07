const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const IngrediantModel = mongoose.model("Ingredient", ingredientSchema);

module.exports = IngrediantModel;
