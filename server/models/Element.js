const mongoose = require('mongoose');

// Define the schema for an element
const ElementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true,
    maxlength: 3
  },
  atomicNumber: {
    type: Number,
    required: true
  },
  atomicMass: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  group: {
    type: Number,
    required: true
  },
  period: {
    type: Number,
    required: true
  },
  block: {
    type: String,
    required: true,
  },
  electronConfiguration: {
    type: String,
    required: true
  },
  electronegativity: {
    type: String,
    default: null 
  }
});

// Create a model from the schema
const Element = mongoose.model('Element', ElementSchema);

module.exports = Element;