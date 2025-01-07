const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const db = require('./config/db');

dotenv.config();

// Initialize the app object before using it
const app = express();

// Enable CORS before any routes or middleware
app.use(cors({
  origin: ["http://localhost:5173","http://localhost:3000"], // Allowed origins
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow cookies and credentials
}));

app.use(bodyParser.json()); // Parse incoming JSON requests

// Define routes
app.use('/api/auth', authRoutes);

// Start Server and connect to MySQL
db.query("SELECT 1")
  .then(() => {
      console.log("MySQL connected!");
      app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch((err) => console.error("Database connection failed:", err.message));
