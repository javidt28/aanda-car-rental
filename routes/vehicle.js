// routes/vehicle.js
const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

router.get('/:vehicleId', async (req, res) => {
  const { vehicleId } = req.params;

  try {
    const vehicle = await Vehicle.findById(vehicleId);

    if (!vehicle) {
      return res.status(404).send('Vehicle not found');
    }

    res.render('vehicle', { title: 'Vehicle Information', vehicle });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
