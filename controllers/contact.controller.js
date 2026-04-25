const contactService = require('../services/contact.service');

const contactController = {
    getContact: (req, res) => {
        const pageData = contactService.getContactData();
        const contactInfo = contactService.getContactInfo();
        
        res.render('layouts/layout', {
            title: pageData.title,
            page: pageData.page,
            activeContact: true,
            contactInfo: contactInfo,
            activeHome: false,
            activeAbout: false,
            activeEvents: false,
            activeNews: false,
            activeLogin: false
        });
    },

    postContact: (req, res) => {
        const formData = req.body;
        const result = contactService.processContactForm(formData);
        res.json(result);
    }
};

module.exports = contactController;