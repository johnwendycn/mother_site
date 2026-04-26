// controllers/channels.controller.js

const channelsService = require('../services/channels.service');

const channelsController = {
    getChannels: (req, res) => {
        const pageData = channelsService.getChannelsData();
        const header = channelsService.getHeader();
        const introduction = channelsService.getIntroduction();
        const banner = channelsService.getBanner();
        const categories = channelsService.getCategories();
        const mediaLogo = channelsService.getMediaLogo();
        const slides = channelsService.getSlides();
        const faqs = channelsService.getFAQs();
        const socialShare = channelsService.getSocialShare();
        const conclusion = channelsService.getConclusion();
        const stats = channelsService.getStats();
        const resources = channelsService.getResourceLinks();
        
        res.render('layouts/layout', {
            title: pageData.title,
            page: pageData.page,
            activeChannels: true,
            header: header,
            introduction: introduction,
            banner: banner,
            categories: categories,
            mediaLogo: mediaLogo,
            slides: slides,
            faqs: faqs,
            socialShare: socialShare,
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

    postChannels: (req, res) => {
        const formData = req.body;
        const result = channelsService.processChannelsForm(formData);
        res.json(result);
    }
};

module.exports = channelsController;