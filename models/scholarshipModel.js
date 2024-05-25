const mongoose = require('mongoose');

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

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

module.exports = Scholarship;
