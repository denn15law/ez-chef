const express = require("express");
const router = express.Router();

const { getFavourites, addFavourite } = require("../controllers/favourites");

//Route: /favourites
router.get("/", getFavourites);
router.post("/", addFavourite);

module.exports = router;
