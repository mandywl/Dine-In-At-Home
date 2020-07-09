const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingrediates: Array,
  thumbnail: { type: String, required: true },
  method: Array,
});

const Recipe = mongoose.model("Recipes", recipeSchema);

module.exports = Recipe;
