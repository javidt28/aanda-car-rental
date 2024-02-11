// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Route to render the registration form
router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

// Route to handle registration form submission
router.post('/register', async (req, res) => {
  try {
    // Extract user data from the registration form
    const { username, email, password } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with the hashed password
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Redirect to the login page after successful registration
    res.redirect('/auth/login');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to render the login form
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Route to handle login form submission
router.post('/login', async (req, res) => {
  try {
    // Extract user data from the login form
    const { email, password } = req.body;

    // Find the user in the database by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    // Check if the entered password matches the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send('Invalid email or password');
    }

    // Set up a session or generate a token for user authentication
    // Example using Express session:
    req.session.userId = user._id;

    // Redirect to the dashboard or another protected route after successful login
    res.redirect('/dashboard');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
