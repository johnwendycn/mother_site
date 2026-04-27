const aboutService = require('../services/about.service');

const aboutController = {
    getAbout: (req, res) => {
        const pageData = aboutService.getAboutData();
        const mission = aboutService.getMission();
        const values = aboutService.getValues();
        const team = aboutService.getTeam();
        const stats = aboutService.getStats();
        const history = aboutService.getHistory();
        
        res.render('layouts/layout', {
            title: pageData.title,
            page: pageData.page,
            activeAbout: true,
            mission: mission,
            values: values,
            team: team,
            stats: stats,
            history: history,
            activeHome: false,
            activeContact: false,
            activeEvents: false,
            activeNews: false,
            activeLogin: false
        });
    },

    postAbout: (req, res) => {
        const formData = req.body;
        const result = aboutService.processAboutForm(formData);
        res.json(result);
    }
};

module.exports = aboutController;