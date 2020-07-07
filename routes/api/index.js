const router = require("express").Router();
const recipeRoutes = require("./recipeRoute");

// Post routes
router.use("/recipes", recipeRoutes);

module.exports = router;
