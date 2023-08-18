const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ResultSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
  unique: true,
 },
 sub1: {
  type: Number,
 },
 sub2: {
  type: Number,
 },
 sub3: {
  type: Number,
 },
 sub4: {
  type: Number,
 },
 sub5: {
  type: Number,
 },
 min: {
  type: Number,
 },
 max: {
  type: Number,
 },
 total: {
  type: Number,
 },
 per: {
  type: Number,
 },
 result: {
  type: String,
 },
});

//Export the model
module.exports.student = mongoose.model('Student', ResultSchema);