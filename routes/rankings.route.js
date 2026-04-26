// routes/ranking.route.js

const express = require('express');
const router = express.Router();
const rankingController = require('../controllers/rankings.controller');

// GET ranking page
router.get('/', rankingController.getRanking);

// POST ranking form (if needed)
router.post('/', rankingController.postRanking);

module.exports = router;