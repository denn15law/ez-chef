const express = require("express");
const router = express.Router();

const { getFavourites } = require("../controllers/favourites");

//Route: /users
router.get("/", getFavourites);

module.exports = router;
