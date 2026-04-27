// routes/investment.route.js

const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investment.controller');

// GET investment page
router.get('/', investmentController.getInvestment);

// POST investment form (if needed)
router.post('/', investmentController.postInvestment);

module.exports = router;