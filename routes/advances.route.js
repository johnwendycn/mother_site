const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('layout', {
        page: 'advances',
        title: '5 Significant Advances to Capitalism by Compassionate Capitalism',
        activeHome: false,
        activeAbout: false,
        activeFeatures: false,
        activeAdvances: true,
        activeRankings: false,
        activeInvestment: false,
        activeMind: false,
        activeChannels: false
    });
});

module.exports = router;