// routes/auth.js
const express = require('express');
const router = express.Router();

// Sample user data (replace with your actual user data handling logic)
const users = [
  { id: 1, username: 'sampleuser', password: 'password123' },
  // Add more users as needed
];

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

router.post('/login', (req, res) => {
  // Ensure req.body is defined
  if (req.body && req.body.username && req.body.password) {
    const { username, password } = req.body;

    // Sample user authentication logic (replace with your actual authentication logic)
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      // Set user ID in session
      req.session.userId = user.id;
      res.redirect('/');
    } else {
      // User not found or invalid credentials
      res.render('login', { title: 'Login', error: 'Invalid username or password' });
    }
  } else {
    // Handle the case when req.body is undefined or missing required fields
    res.status(400).send('Invalid request');
  }
});

router.get('/logout', (req, res) => {
  // Clear user ID from session
  req.session.userId = null;
  res.redirect('/');
});

module.exports = router;
