const express = require("express");
const router = express.Router();

const {
  getFavourites,
  addFavourite,
  deleteFavouriteById,
} = require("../controllers/favourites");

//Route: /favourites
router.get("/", getFavourites);
router.post("/", addFavourite);
router.delete("/:id", deleteFavouriteById);

module.exports = router;
