// routes/index.js
const express = require('express');
const router = express.Router();

// Placeholder function to simulate fetching user by ID
const getUserById = (userId) => {
  // Replace this with your actual logic to fetch user details
  return {
    id: userId,
    username: 'JohnDoe', // Replace with actual username
    // Add more user details as needed
  };
};

// Home Page
// routes/index.js
router.get('/', (req, res) => {
  const user = req.session.userId ? getUserById(req.session.userId) : null;
  res.render('index', { title: 'Car Rental Dashboard', user: user }); // Ensure user is passed
});

// Booking Page
router.get('/booking', (req, res) => {
  res.render('booking', { title: 'Book a Car' });
});

// Profile Page
router.get('/profile', (req, res) => {
  // Placeholder logic to fetch and display user profile information
  const userProfile = {
    username: user ? user.username : null, // Use the user information if available
    email: 'john@example.com', // Replace with actual email
    // Add more profile information as needed
  };
  res.render('profile', { title: 'Profile', userProfile });
});

// Register Page
router.get('/auth/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

// Login Page
router.get('/auth/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

router.get('/our-fleet', (req, res) => {
  // Render the Our Fleet page
  res.render('our-fleet'); // Assuming you have a view file named "our-fleet.ejs"
});

// Vehicle Details Page
router.get('/vehicle/:vehicleId', (req, res) => {
  // Placeholder logic to fetch and display vehicle information
  const { vehicleId } = req.params;
  const vehicleDetails = {
    id: vehicleId,
    brand: 'Toyota',
    model: 'Camry',
    // Add more vehicle details as needed
  };
  res.render('vehicleDetails', { title: 'Vehicle Details', vehicleDetails });
});

module.exports = router;
