const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/", (req, res) => {
  req.logOut();
  res.redirect("/");
  console.log(`----- ${user.first_name} Logged out -----`);
});

module.exports = router;
