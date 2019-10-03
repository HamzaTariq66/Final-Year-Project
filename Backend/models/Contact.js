const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ContactSchema = new Schema({
  full_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String
  },
  message: {
    type: String,
    required: true
  },
  created: {
    type: String
  }
});

module.exports = Contact = mongoose.model("UserMessage", ContactSchema);
