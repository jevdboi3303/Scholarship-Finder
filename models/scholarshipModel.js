// Import mongoose library to use its functionalities 
const mongoose = require('mongoose');

// Create a schema that outlines the structure and rules for scholarship entries in the database.
const scholarshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  scholarshipType: { type: String },
  applicationRequired: { type: Boolean },
  description: { type: String },
  quantity: { type: String },
  preference: { type: String },
  faculty: { type: String },
  gender: { type: String },
  year: { type: String },
  disability: { type: Boolean },
  indigenous: { type: Boolean },
  race: { type: String },
  nationality: { type: String },
  gpa: { type: Number },
  amount: { type: String },
  gpaBased: { type: Boolean },
  medalsPrizes: { type: Boolean },
});

// Create a model using the schema which methods to interact with the Scholarship collection in the MongoDB database.
const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

// Export scholarship to be used in other parts of the program 
module.exports = Scholarship;
