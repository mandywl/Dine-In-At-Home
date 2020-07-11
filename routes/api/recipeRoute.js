const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/posts"
router.route("/").post(recipesController.create);

router.route("/").get(recipesController.findAll);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(recipesController.findById)
  .delete(recipesController.remove);

module.exports = router;
