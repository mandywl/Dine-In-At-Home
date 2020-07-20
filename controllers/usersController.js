const db = require("../models");
const passport = require("passport");

module.exports = {
  register: function (req, res) {
    db.User.register(
      new db.User(({ username, email } = req.body)),
      req.body.password,
      function (err, account) {
        if (err) {
          console.log(err);
          return res.send(err);
        }
        passport.authenticate("local")(req, res, function () {
          res.json(req.user);
          //return res.send(req.user);
        });
      }
    );
  },

  login: function (req, res) {
    res.json(req.user);
  },

  logout: function (req, res) {
    req.logout();
    res.json("logged out");
  },
};
