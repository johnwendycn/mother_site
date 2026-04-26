// routes/user-terms.route.js

const express = require('express');
const router = express.Router();
const userTermsController = require('../controllers/user-terms.controller');

// GET user terms page
router.get('/', userTermsController.getUserTerms);

// POST user terms form (if needed)
router.post('/', userTermsController.postUserTerms);

module.exports = router;