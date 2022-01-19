const express = require("express");
const router = express.Router();

const {
  getFavourites,
  addFavourite,
  deleteFavouriteById,
} = require("../controllers/favourites");

//Route: /favourites
router.get("/:user", getFavourites);
router.post("/:user", addFavourite);
router.delete("/:user/:id", deleteFavouriteById);

module.exports = router;
