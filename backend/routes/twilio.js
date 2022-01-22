const express = require("express");
const router = express.Router();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = require("twilio")(accountSid, authToken);

router.put("/", (req, res) => {
  const response = req.body;
  console.log(response);

  client.messages
    .create({
      body: response.message,
      from: "+16204593471",
      to: "+16479833463",
    })
    .then((message) => console.log(message));
});

module.exports = router;
