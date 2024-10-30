const express = require('express');
const { register , login } = require("../controllers/authController");
const router = express.Router();

// Endpoint to register a new user
router.post('/register', register);

// Endpoint for user login
router.post('/login', login);

module.exports = router;