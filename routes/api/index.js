const router = require("express").Router();
const recipeRoutes = require("./recipeRoute");
const shoppingRoutes = require("./shoppingRoute");

// Post routes
router.use("/recipes", recipeRoutes);
router.use("/shoppinglist", shoppingRoutes);

module.exports = router;
