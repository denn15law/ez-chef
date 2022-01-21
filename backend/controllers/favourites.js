const { default: axios } = require("axios");
const Favourite = require("../models/Favourite");

const dotenv = require("dotenv");
dotenv.config();

const getFavourites = (req, res) => {
  const user = req.params.user;
  Favourite.find({ user: user })
    .sort({ favourite_title: 1 })
    .then((favourite) => res.json(favourite))
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const addFavouriteFromMyRecipes = (req, res) => {
  const user = req.params.user;
  const recipeID = req.params.id;

  Favourite.findOne({ favourite_recipeID: recipeID, user: user }).then(
    (response) => {
      if (!response) {
        const newFavourite = new Favourite({
          user: user,
          favourite_title: req.body.title,
          favourite_image: req.body.image_url,
          favourite_recipeID: req.body._id,
        });
        newFavourite
          .save()
          .then((response) => {
            res.json(response);
          })
          .catch((err) => console.log(err));
      } else {
        console.log("Already added!");
        res.status(400).send("Favourite already added");
      }
    }
  );
};

const addFavouriteFromApi = (req, res) => {
  const user = req.params.user;
  const recipeID = req.body.id;

  Favourite.findOne({ favourite_recipeID: recipeID, user: user }).then(
    (response) => {
      console.log(response);
      if (!response) {
        const newFavourite = new Favourite({
          user: user,
          favourite_title: req.body.title,
          favourite_image: req.body.image,
          favourite_recipeID: req.body.id,
        });
        newFavourite
          .save()
          .then((response) => {
            res.json(response);
          })
          .catch((err) => console.log(err.message));
      } else {
        console.log("Already added!");
        res.status(400).send("Favourite already added");
      }
    }
  );
};

const deleteFavouriteById = (req, res) => {
  const user = req.params.user;
  console.log("user", user);
  Favourite.deleteOne({ favourite_recipeID: req.params.id, user: user })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getFavourites,
  addFavouriteFromMyRecipes,
  addFavouriteFromApi,
  deleteFavouriteById,
};
