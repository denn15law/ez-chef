const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  req.session.destroy();
  // console.log(`-----${req.session.id}-----`);
  req.logOut();
  console.log("----- Successfully logged out -----");
  res.json({ message: "Successfully logged out" });
});

module.exports = router;
