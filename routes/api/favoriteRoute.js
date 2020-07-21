const router = require("express").Router();
const favoriteController = require("../../controllers/favoriteController");

// Matches with "/api/posts"
router.route("/").post(favoriteController.create);

router.route("/").get(favoriteController.findAll);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(favoriteController.findById)
  .delete(favoriteController.remove);

router
  .route("/recipe/:recipeID/:userID")
  .get(favoriteController.findByRecipeId);

router.route("/recipe/:id").delete(favoriteController.removeByRecipeId);

router.route("/user/:id").get(favoriteController.findByUserId);

module.exports = router;
