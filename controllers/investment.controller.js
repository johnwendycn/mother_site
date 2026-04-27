// controllers/investment.controller.js

const investmentService = require('../services/investment.service');

const investmentController = {
    getInvestment: (req, res) => {
        const pageData = investmentService.getInvestmentData();
        const introduction = investmentService.getIntroduction();
        const howToJoin = investmentService.getHowToJoin();
        const reasonsToJoin = investmentService.getReasonsToJoin();
        const membership = investmentService.getMembership();
        const membershipCategories = investmentService.getMembershipCategories();
        const conclusion = investmentService.getConclusion();
        const stats = investmentService.getStats();
        const resources = investmentService.getResourceLinks();
        
        res.render('layouts/layout', {
            title: pageData.title,
            page: pageData.page,
            activeInvestment: true,
            introduction: introduction,
            howToJoin: howToJoin,
            reasonsToJoin: reasonsToJoin,
            membership: membership,
            membershipCategories: membershipCategories,
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

    postInvestment: (req, res) => {
        const formData = req.body;
        const result = investmentService.processInvestmentForm(formData);
        res.json(result);
    }
};

module.exports = investmentController;