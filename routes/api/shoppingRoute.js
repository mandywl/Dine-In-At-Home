const router = require("express").Router();
const shoppingController = require("../../controllers/shoppingController");

// Matches with "/api/posts"
router.route("/").post(shoppingController.create);
router.route("/").get(shoppingController.findAll);
router.route("/check").get(shoppingController.find);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(shoppingController.findById)
  .delete(shoppingController.remove);

module.exports = router;
