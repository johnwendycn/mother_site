const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/about.controller');

// GET about page
router.get('/', aboutController.getAbout);

// POST about page (for contact form, newsletter signup, etc.)
router.post('/', aboutController.postAbout);

// Optional: GET about/history subpage
router.get('/history', aboutController.getHistory);

// Optional: GET about/mission subpage
router.get('/mission', aboutController.getMission);

// Optional: GET about/vision subpage
router.get('/vision', aboutController.getVision);

// Optional: GET about/team subpage
router.get('/team', aboutController.getTeam);

module.exports = router;