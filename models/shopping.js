const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingSchema = new Schema({
  ingrediates: { type: String, required: true },
});

const ShoppingList = mongoose.model("ShoppingList", shoppingSchema);

module.exports = ShoppingList;
