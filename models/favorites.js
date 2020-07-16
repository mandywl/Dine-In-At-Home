const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingrediates: Array,
  thumbnail: { type: String, required: true },
  method: Array,
});

const Favorite = mongoose.model("Favorites", favoriteSchema);

module.exports = Favorite;
