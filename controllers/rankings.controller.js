// controllers/ranking.controller.js

const rankingService = require('../services/rankings.service');

const rankingController = {
    getRanking: (req, res) => {
        const pageData = rankingService.getRankingData();
        const introduction = rankingService.getIntroduction();
        const banner = rankingService.getBanner();
        const basicNeeds = rankingService.getBasicNeeds();
        const africaRankings = rankingService.getAfricaRankings();
        const accessNotice = rankingService.getAccessNotice();
        const conclusion = rankingService.getConclusion();
        const stats = rankingService.getStatistics();
        const resources = rankingService.getResourceLinks();
        
        res.render('layouts/layout', {
            title: pageData.title,
            page: pageData.page,
            activeRanking: true,
            introduction: introduction,
            banner: banner,
            basicNeeds: basicNeeds,
            africaRankings: africaRankings,
            accessNotice: accessNotice,
            conclusion: conclusion,
            stats: stats,
            resources: resources,
            activeHome: false,
            activeAbout: false,
            activeContact: false,
            activeEvents: false,
            activeNews: false,
            activeLogin: false
        });
    },

    postRanking: (req, res) => {
        const formData = req.body;
        const result = rankingService.processRankingForm(formData);
        res.json(result);
    }
};

module.exports = rankingController;