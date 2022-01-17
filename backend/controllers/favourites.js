const { default: axios } = require("axios");
const Favourite = require("../models/Favourite");
const dotenv = require("dotenv");
dotenv.config();

const getFavourites = (req, res) => {
  Favourite.find()
    .then((favourite) => res.json(favourite))
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const addFavourite = (req, res) => {
  const newFavourite = new Recipe({
    title: req.body.title,
    image_url: req.body.image_url,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    serving_size: req.body.serving_size,
  });
  console.log(newRecipe);
  newRecipe
    .save()
    .then((response) => res.json(response))
    .catch((err) => console.log(err.message));
};

module.exports = {
  getFavourites,
};
