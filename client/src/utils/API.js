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
  getShoppingListByUserID: function (UserID) {
    return axios.get("api/shoppinglist/user/" + UserID);
  },
  getFavorites: function () {
    return axios.get("api/favorites");
  },
  getFavorite: function (id) {
    return axios.get("api/favorites/" + id);
  },
  getFavoriteByRecipeID: function (recipeID, userID) {
    return axios.get("api/favorites/recipe/" + recipeID + "/" + userID);
  },
  getFavoriteByUserID: function (UserID) {
    return axios.get("api/favorites/user/" + UserID);
  },
  deleteFavorite: function (id) {
    return axios.delete("/api/favorites/" + id);
  },
  deleteFavoriteByRecipeId: function (recipeID) {
    return axios.delete("/api/favorites/recipe/" + recipeID);
  },
  addFavorite: function (postData) {
    return axios.post("/api/favorites", postData);
  },
  // Login
  login: function (userData) {
    return axios.post("/api/users/login", userData);
  },

  isLoggedIn: function () {
    return axios.get("/api/users/isLoggedIn");
  },

  logout: function () {
    return axios.get("/api/users/logout");
  },

  // Registration
  register: function (userData) {
    return axios.post("/api/users/register", userData);
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
};
