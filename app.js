// app.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const crypto = require('crypto');

// Generate a secret key for session
const sessionSecret = crypto.randomBytes(32).toString('hex');

const app = express();
const uri = "mongodb+srv://" +
  encodeURIComponent("javidmitchell16") + ":" +
  encodeURIComponent("PaVxi3EKCuNcQxuh") +
  "@aacarrental.dytu2db.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Set up session middleware
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true
}));

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

app.use('/', indexRoutes);
app.use('/auth', authRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send("Sorry, the page you're looking for doesn't exist.");
});

// Handle other errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
