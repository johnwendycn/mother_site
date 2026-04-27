// controllers/user-terms.controller.js

const userTermsService = require('../services/user-terms.service');

const userTermsController = {
    getUserTerms: (req, res) => {
        const pageData = userTermsService.getUserTermsData();
        const header = userTermsService.getHeader();
        const welcomeNotice = userTermsService.getWelcomeNotice();
        const clause1 = userTermsService.getClause1();
        const clause2 = userTermsService.getClause2();
        const clause3 = userTermsService.getClause3();
        const clause4 = userTermsService.getClause4();
        const clause5 = userTermsService.getClause5();
        const clause6 = userTermsService.getClause6();
        const clause7 = userTermsService.getClause7();
        const clause8 = userTermsService.getClause8();
        const clause9 = userTermsService.getClause9();
        const clause10 = userTermsService.getClause10();
        const acceptance = userTermsService.getAcceptance();
        const conclusion = userTermsService.getConclusion();
        const stats = userTermsService.getStats();
        const resources = userTermsService.getResourceLinks();
        
        res.render('layouts/layout', {
            title: pageData.title,
            page: pageData.page,
            activeUserTerms: true,
            header: header,
            welcomeNotice: welcomeNotice,
            clause1: clause1,
            clause2: clause2,
            clause3: clause3,
            clause4: clause4,
            clause5: clause5,
            clause6: clause6,
            clause7: clause7,
            clause8: clause8,
            clause9: clause9,
            clause10: clause10,
            acceptance: acceptance,
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

    postUserTerms: (req, res) => {
        const formData = req.body;
        const result = userTermsService.processUserTermsForm(formData);
        res.json(result);
    }
};

module.exports = userTermsController;