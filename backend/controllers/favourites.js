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
  const recipeID = req.body.id;
  console.log("I am recipeID in addFavourite", recipeID);

  Favourite.findOne({ favourite_recipeID: recipeID }).then((response) => {
    console.log("called");
    console.log(response);
    if (!response) {
      const newFavourite = new Favourite({
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
  });
  // async (err, result) => {
  //   console.log("error", err);
  //   console.log("result", result);
  //   if (err) {
  //     throw err;
  //   }
  //   if (result) {
  //     res
  //       .status(400)
  //       .send("You have already added this recipe to your favourites.");
  //   }
  //   if (!result) {
  //     const newFavourite = new Favourite({
  //       favourite_title: req.body.title,
  //       favourite_image: req.body.image,
  //       favourite_recipeID: req.body.id,
  //     });
  //     newFavourite
  //       .save()
  //       .then((response) => {
  //         res.json(response);
  //       })
  //       .catch((err) => console.log(err.message));
  //   }
  // };
};

module.exports = {
  getFavourites,
  addFavourite,
};
