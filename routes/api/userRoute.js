const router = require("express").Router();
const passport = require("passport");
const usersController = require("../../controllers/usersController");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    res.json(req.user);
  }
}

router.post("/register", usersController.register);

router.post("/login", passport.authenticate("local"), usersController.login);

router.get("/isLoggedIn", isLoggedIn, function (req, res) {
  res.json(req.user);
});

router.get("/logout", usersController.logout);

module.exports = router;
