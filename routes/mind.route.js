// routes/mind.route.js

const express = require('express');
const router = express.Router();
const mindController = require('../controllers/mind.controller');

// GET mind page
router.get('/', mindController.getMind);

// POST mind form (if needed)
router.post('/', mindController.postMind);

module.exports = router;