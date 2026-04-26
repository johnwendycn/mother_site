// routes/advances.route.js

const express = require('express');
const router = express.Router();
const advancesController = require('../controllers/advances.controller');

// GET advances page
router.get('/', advancesController.getAdvances);

// POST advances form (if needed)
router.post('/', advancesController.postAdvances);

module.exports = router;