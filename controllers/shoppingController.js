const db = require("../models");

// Defining methods for the postsController
module.exports = {
  findAll(req, res) {
    db.ShoppingList.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById(req, res) {
    db.ShoppingList.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  async create(req, res) {
    const item = await db.ShoppingList.find(req.body);
    if (!item.length) {
      db.ShoppingList.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } else {
      res.status(200).send("");
    }
  },
  update(req, res) {
    db.ShoppingList.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove(req, res) {
    db.ShoppingList.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  find(req, res) {
    db.ShoppingList.find({ ingrediates: req.params.ingrediates })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByUserId(req, res) {
    db.ShoppingList.find({ userID: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
