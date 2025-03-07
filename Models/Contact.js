const mongoose = require('mongoose');

// Define the contact schema
const contactSchema = new mongoose.Schema({
  firstname: String,
  lastname:String,
  email: String,
});

// Create the model
const Contact = mongoose.model('Contact', contactSchema);

// Export the model
module.exports = Contact;
