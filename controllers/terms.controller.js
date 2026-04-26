// controllers/terms.controller.js

const termsService = require('../services/terms.service');

const termsController = {
    getTerms: (req, res) => {
        const pageData = termsService.getTermsData();
        const header = termsService.getHeader();
        const effectiveNotice = termsService.getEffectiveNotice();
        const clause1 = termsService.getClause1();
        const clause2 = termsService.getClause2();
        const clause3 = termsService.getClause3();
        const clause4 = termsService.getClause4();
        const clause5 = termsService.getClause5();
        const clause6 = termsService.getClause6();
        const clause7 = termsService.getClause7();
        const clause8 = termsService.getClause8();
        const clause9 = termsService.getClause9();
        const clause10 = termsService.getClause10();
        const clause11 = termsService.getClause11();
        const clause12 = termsService.getClause12();
        const acceptance = termsService.getAcceptance();
        const conclusion = termsService.getConclusion();
        const stats = termsService.getStats();
        const resources = termsService.getResourceLinks();
        
        res.render('layouts/layout', {
            title: pageData.title,
            page: pageData.page,
            activeTerms: true,
            header: header,
            effectiveNotice: effectiveNotice,
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
            clause11: clause11,
            clause12: clause12,
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

    postTerms: (req, res) => {
        const formData = req.body;
        const result = termsService.processTermsForm(formData);
        res.json(result);
    }
};

module.exports = termsController;