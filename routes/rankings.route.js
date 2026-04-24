const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        page: 'rankings',
        title: 'Compassionate Capitalism Development Rankings',
        activeHome: false,
        activeAbout: false,
        activeFeatures: false,
        activeAdvances: false,
        activeRankings: true,
        activeInvestment: false,
        activeMind: false,
        activeChannels: false
    });
});

module.exports = router;