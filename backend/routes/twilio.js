const express = require("express");
const router = express.Router();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = require("twilio")(accountSid, authToken);

router.put("/", (req, res) => {
  const response = req.body;
  console.log(response);
  const phone = "+1" + response.phone;

  client.messages
    .create({
      body: response.message,
      from: `${process.env.TWILIO_NUMBER}`,
      to: phone,
    })
    .then((message) => res.json(message.sid));
});

module.exports = router;
