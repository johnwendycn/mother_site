const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('layout', {
        page: 'investment',
        title: 'Compassionate Capitalism Investment Points',
        activeHome: false,
        activeAbout: false,
        activeFeatures: false,
        activeAdvances: false,
        activeRankings: false,
        activeInvestment: true,
        activeMind: false,
        activeChannels: false
    });
});

module.exports = router;