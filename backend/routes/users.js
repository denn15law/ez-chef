const express = require("express");
const router = express.Router();
const { getUsers, createUser, findUserById } = require("../controllers/users");

//Recipe Model
const Recipe = require("../models/Recipe");

//Route: /recipes
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", findUserById);

module.exports = router;
