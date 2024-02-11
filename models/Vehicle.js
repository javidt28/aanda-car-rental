// models/Vehicle.js
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  // Add more fields as needed
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
