// controllers/advances.controller.js

const advancesService = require('../services/advances.service');

const advancesController = {
    getAdvances: (req, res) => {
        const pageData = advancesService.getAdvancesData();
        const advances = advancesService.getAdvances();
        const conclusion = advancesService.getConclusion();
        const stats = advancesService.getStatistics();
        const resources = advancesService.getResourceLinks();
        
        res.render('layouts/layout', {
            title: pageData.title,
            page: pageData.page,
            activeAdvances: true,
            advances: advances,
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

    postAdvances: (req, res) => {
        const formData = req.body;
        const result = advancesService.processAdvancesForm(formData);
        res.json(result);
    }
};

module.exports = advancesController;