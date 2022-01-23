const express = require("express");
const router = express.Router();
const User = require("../models/User");

const { getAllUsers, getUserById } = require("../controllers/users");
const { route } = require("express/lib/application");

//Route: /users
router.get("/", getAllUsers);
router.get("/:id", getUserById);

module.exports = router;
