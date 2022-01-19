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

const getUserCreatedRecipes = (req, res) => {
  const user_id = req.params.user_id;
  User.findById(user_id)
    .then((user) => res.json(user.recipes_created))
    .catch((err) => res.json(err.message));
};

const addRecipeToUser = (req, res) => {
  const user_id = req.params.user_id;
  const recipe_id = req.params.recipe_id;

  Recipe.findById(recipe_id)
    .then((recipe) => {
      return User.findByIdAndUpdate(
        user_id,
        { $push: { recipes_created: recipe._id } },
        { new: true, upsert: true },
        function (err, managerparent) {
          if (err) throw err;
          console.log(managerparent);
        }
      );
    })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => res.json(err));
};

const getUserFavourites = (req, res) => {
  const user_id = req.params.user_id;
  User.findById(user_id)
    .then((user) => res.json(user.favourited_recipes))
    .catch((err) => res.json(err.message));
};

const addFavouriteToUser = (req, res) => {
  const user_id = req.params.user_id;
  const favourite_id = req.params.favourite_id;

  Favourite.findById(favourite_id)
    .then((favourite) => {
      return User.findByIdAndUpdate(
        user_id,
        { $push: { favourited_recipts: favourite._id } },
        { new: true, upsert: true },
        function (err, managerparent) {
          if (err) throw err;
          console.log(managerparent);
        }
      );
    })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => res.json(err));
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserCreatedRecipes,
  addRecipeToUser,
  getUserFavourites,
  addFavouriteToUser,
};
