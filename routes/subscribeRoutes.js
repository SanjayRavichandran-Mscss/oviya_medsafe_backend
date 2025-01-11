const express = require('express');
const {
  subscribeEmail,
  getAllSubscriptions,
  getSubscriptionById,
} = require('../controllers/subscribeController');
const router = express.Router();

// POST route for subscribing
router.post('/subscribe', subscribeEmail);

// GET route to retrieve all subscriptions
router.get('/subscribe', getAllSubscriptions);

// GET route to retrieve a subscription by ID
router.get('/subscribe/:id', getSubscriptionById);

module.exports = router;
