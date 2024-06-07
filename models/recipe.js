const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  ingredients: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  
});

const RecipeModel = mongoose.model("Recipe", recipeSchema);

module.exports = RecipeModel;
