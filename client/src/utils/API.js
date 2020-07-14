import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  // Gets all books
  getRecipes: function () {
    return axios.get("api/recipes");
  },
  // Gets the book with the given id
  getRecipe: function (id) {
    return axios.get("/api/recipes/" + id);
  },
  // Deletes the post with the given id
  deleteRecipe: function (id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a post to the database
  saveRecipe: function (postData) {
    return axios.post("/api/recipes", postData);
  },
  createShoppngList: function (postData) {
    return axios.post("/api/shoppinglist", postData);
  },
  getShoppingList: function () {
    return axios.get("/api/shoppinglist");
  },
  deleteShoppingList: function (id) {
    return axios.delete("/api/shoppinglist/" + id);
  },
};
