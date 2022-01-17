const express = require("express");
const router = express.Router();
const passport = require("passport");

// Route: /login

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(400).json({ err: err });
    }
    if (!user) {
      return res.status(400).json({ err: err });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(400).json({ err: err });
      }
      return res.status(200).json({ success: `Logged in as ${user.id}` });
    });
  })(req, res, next);
});

module.exports = router;
