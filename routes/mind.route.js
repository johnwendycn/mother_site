const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('layout', {
        page: 'mind',
        title: 'The Mind of King Charles N. Lambert',
        activeHome: false,
        activeAbout: false,
        activeFeatures: false,
        activeAdvances: false,
        activeRankings: false,
        activeInvestment: false,
        activeMind: true,
        activeChannels: false
    });
});

module.exports = router;