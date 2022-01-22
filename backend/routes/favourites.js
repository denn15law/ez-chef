const express = require("express");
const router = express.Router();

const {
  getFavourites,
  addFavouriteFromMyRecipes,
  addFavouriteFromApi,
  deleteFavouriteById,
  checkFavourites,
} = require("../controllers/favourites");

//Route: /favourites
router.get("/:user/", getFavourites);
// router.get("/check/:user/:id", checkFavourites);
router.post("/api/:user/:id", addFavouriteFromApi);
router.post("/myRecipes/:user/:id", addFavouriteFromMyRecipes);
router.delete("/:user/:id", deleteFavouriteById);

module.exports = router;
