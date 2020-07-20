const router = require("express").Router();
const recipeRoutes = require("./recipeRoute");
const shoppingRoutes = require("./shoppingRoute");
const favoriteRoute = require("./favoriteRoute");
const userRoute = require("./userRoute");

// Post routes
router.use("/recipes", recipeRoutes);
router.use("/shoppinglist", shoppingRoutes);
router.use("/favorites", favoriteRoute);
router.use("/users", userRoute);

module.exports = router;
