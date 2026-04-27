// routes/features.route.js
const express = require('express');
const router = express.Router();
const featuresController = require('../controllers/features.controller');

// GET features page
router.get('/', featuresController.getFeatures);

// POST features form (if needed)
router.post('/', featuresController.postFeatures);

module.exports = router;