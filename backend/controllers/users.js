const User = require("../models/User");
const Recipe = require("../models/Recipe");
const Favourite = require("../models/Favourite");
const res = require("express/lib/response");

const getAllUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err.message));
};

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ message: err.message }));
};

module.exports = {
  getAllUsers,
  getUserById,
};
