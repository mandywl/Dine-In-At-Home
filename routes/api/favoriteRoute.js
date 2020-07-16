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

module.exports = router;
