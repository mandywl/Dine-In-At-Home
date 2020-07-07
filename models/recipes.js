const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredient1: { type: String, required: true },
  ingredient2: { type: String, required: false },
  ingredient3: { type: String, required: false },
  ingredient4: { type: String, required: false },
  ingredient5: { type: String, required: false },
  ingredient6: { type: String, required: false },
  ingredient7: { type: String, required: false },
  ingredient8: { type: String, required: false },
  ingredient9: { type: String, required: false },
  ingredient10: { type: String, required: false },
  ingredient11: { type: String, required: false },
  ingredient12: { type: String, required: false },
  ingredient13: { type: String, required: false },
  ingredient14: { type: String, required: false },
  ingredient15: { type: String, required: false },
  ingredient16: { type: String, required: false },
  ingredient17: { type: String, required: false },
  thumbnail: { type: String, required: true },
  Method: { type: String, required: true },
});

const Recipe = mongoose.model("Recipes", recipeSchema);

module.exports = Recipe;
