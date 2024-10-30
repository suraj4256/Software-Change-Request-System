// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db'); // Import database configuration
const authRoutes = require('./routes/authRoutes'); // Import authentication routes
const changeRequestRoutes = require('./routes/changeRequestRoutes'); // Import change request routes
const teamRoutes = require('./routes/teamRoutes'); // Import team management routes
const userRoutes = require('./routes/userRoutes'); // Import user management routes

// Load environment variablesdotenv
dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Test database connection
db.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Define routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/change-requests', changeRequestRoutes); // Change request routes
// app.use('/api/teams', teamRoutes); // Team management routes
// app.use('/api/users', userRoutes); // User management routes

// Define a simple route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the Change Request Management System API!');
});

// Set the application to listen on the specified port
const PORT = 3000; // Default to port 3000 if not specified
app.listen(PORT, (err) => {
    console.log(`Server is running on port ${PORT}`);
});