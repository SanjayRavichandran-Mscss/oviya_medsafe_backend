const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login route
router.post('/login', authController.login);

// Update password route
router.patch('/update-password', authController.updatePassword);

module.exports = router;
