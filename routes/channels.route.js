// routes/channels.route.js

const express = require('express');
const router = express.Router();
const channelsController = require('../controllers/channels.controller');

// GET channels page
router.get('/', channelsController.getChannels);

// POST channels form (if needed)
router.post('/', channelsController.postChannels);

module.exports = router;