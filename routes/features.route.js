const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('layout', {
        page: 'features',
        title: '7 Core Features of Compassionate Capitalism',
        activeHome: false,
        activeAbout: false,
        activeFeatures: true,
        activeAdvances: false,
        activeRankings: false,
        activeInvestment: false,
        activeMind: false,
        activeChannels: false
    });
});

module.exports = router;