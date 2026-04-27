// routes/terms.route.js

const express = require('express');
const router = express.Router();
const termsController = require('../controllers/terms.controller');

// GET terms page
router.get('/', termsController.getTerms);

// POST terms form (if needed)
router.post('/', termsController.postTerms);

module.exports = router;