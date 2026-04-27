// controllers/mind.controller.js

const mindService = require('../services/mind.service');

const mindController = {
    getMind: (req, res) => {
        const pageData = mindService.getMindData();
        const introduction = mindService.getIntroduction();
        const advances = mindService.getAdvances();
        const videoCategories = mindService.getVideoCategories();
        const conclusion = mindService.getConclusion();
        const stats = mindService.getStatistics();
        const resources = mindService.getResourceLinks();
        
        res.render('layouts/layout', {
            title: pageData.title,
            page: pageData.page,
            activeMind: true,
            introduction: introduction,
            advances: advances,
            videoCategories: videoCategories,
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

    postMind: (req, res) => {
        const formData = req.body;
        const result = mindService.processMindForm(formData);
        res.json(result);
    }
};

module.exports = mindController;