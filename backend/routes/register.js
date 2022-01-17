const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Route: /register
router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.status(400).send("Please submit an email and/or password");
  } else {
    User.findOne({ email: email }, async (err, result) => {
      if (err) {
        throw err;
      }
      if (result) {
        res.status(400).send("User already exists, please login");
      }
      if (!result) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  }
});

module.exports = router;
