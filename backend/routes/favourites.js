const express = require("express");
const router = express.Router();

const {
  getFavourites,
  addFavouriteFromMyRecipes,
  addFavouriteFromApi,
  deleteFavouriteById,
} = require("../controllers/favourites");

//Route: /favourites
router.get("/:user/", getFavourites);
router.post("/api/:user/:id", addFavouriteFromApi);
router.post("/myRecipes/:user/:id", addFavouriteFromMyRecipes);
router.delete("/:user/:id", deleteFavouriteById);

module.exports = router;
