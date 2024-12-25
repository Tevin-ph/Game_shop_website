const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create and save user without hashing the password
    const user = new User({ name, email, password });
    await user.save();

    // Send successful response with status 201 (Created)
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);  // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
});

  

module.exports = router;
