const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const favoriteSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingrediates: Array,
  thumbnail: { type: String, required: true },
  method: Array,
  recipeID: { type: ObjectId, required: true },
});

const Favorite = mongoose.model("Favorites", favoriteSchema);

module.exports = Favorite;
