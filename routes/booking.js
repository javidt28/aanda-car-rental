// routes/booking.js
const express = require('express');
const router = express.Router();

router.get('/search', (req, res) => {
  res.render('search', { title: 'Search and Booking' });
});

// Add booking logic here

module.exports = router;
