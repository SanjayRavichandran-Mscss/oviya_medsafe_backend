const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Route for submitting the form
router.post('/submit-form', formController.submitForm);

// Route to get all forms
router.get('/leads', formController.getAllForms);

// Route to get a form by ID
router.get('/leads/:id', formController.getFormById);

module.exports = router;
