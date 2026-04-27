// controllers/features.controller.js
const featuresService = require('../services/features.service');

const featuresController = {
    getFeatures: (req, res) => {
        try {
            const pageData = featuresService.getFeaturesData();
            const features = featuresService.getFeatures();
            const conclusion = featuresService.getConclusion();
            const statistics = featuresService.getStatistics();
            const resourceLinks = featuresService.getResourceLinks();
            
            res.render('layouts/layout', {
                title: pageData.title,
                page: pageData.page,
                activeFeatures: true,
                features: features,
                conclusion: conclusion,
                statistics: statistics,
                resourceLinks: resourceLinks,
                activeHome: false,
                activeAbout: false,
                activeContact: false,
                activeEvents: false,
                activeNews: false,
                activeLogin: false
            });
        } catch (error) {
            console.error('Error in features controller:', error);
            res.status(500).send('Error loading features page');
        }
    },

    postFeatures: (req, res) => {
        try {
            const formData = req.body;
            const result = featuresService.processFeaturesForm(formData);
            res.json(result);
        } catch (error) {
            console.error('Error processing features form:', error);
            res.json({ success: false, message: 'Error processing request' });
        }
    }
};

module.exports = featuresController;