const express = require("express");
const contacts = express.Router();
const cors = require("cors");

const Contact = require("../../models/Contact");
contacts.use(cors());

contacts.post("/submit", (req, res) => {
  const today = new Date();
  const contactData = {
    full_name: req.body.full_name,
    subject: req.body.subject,
    email: req.body.email,
    message: req.body.message,
    created: today
  };

  Contact.create(contactData)
    .then(contact => {
      res.json({
        status: "Your response is recieved, we will contact you shortly!"
      });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = contacts;
