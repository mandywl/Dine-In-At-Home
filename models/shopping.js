const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const shoppingSchema = new Schema({
  ingrediates: { type: String, required: true },
  userID: { type: ObjectId, required: true },
});

const ShoppingList = mongoose.model("ShoppingList", shoppingSchema);

module.exports = ShoppingList;
