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
  const newFavourite = new Favourite({
    favourite_title: req.body.title,
    favourite_image: req.body.image,
    favourite_recipeID: req.body.id,
  });
  console.log(newFavourite);
  newFavourite
    .save()
    .then((response) => res.json(response))
    .catch((err) => console.log(err.message));
};

module.exports = {
  getFavourites,
  addFavourite,
};
