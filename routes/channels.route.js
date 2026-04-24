const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('layout', {
        page: 'channels',
        title: '28 Development Channels',
        activeHome: false,
        activeAbout: false,
        activeFeatures: false,
        activeAdvances: false,
        activeRankings: false,
        activeInvestment: false,
        activeMind: false,
        activeChannels: true
    });
});

module.exports = router;