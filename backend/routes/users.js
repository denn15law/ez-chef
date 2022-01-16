const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Route: /users
router.get("/", (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
});

// router.get("/:id", (req, res) => {
//   User.findById(req.body.id)
//     .then((res) => {
//       res.send(req.user);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

module.exports = router;
