const router = require("express").Router();
const recipeRoutes = require("./recipeRoute");
const shoppingRoutes = require("./shoppingRoute");
const favoriteRoute = require("./favoriteRoute");

// Post routes
router.use("/recipes", recipeRoutes);
router.use("/shoppinglist", shoppingRoutes);
router.use("/favorites", favoriteRoute);

module.exports = router;
