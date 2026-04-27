// services/user-terms.service.js

const userTermsService = {
    getUserTermsData: () => {
        return {
            title: 'CC Investments App - User Terms',
            page: 'user-terms'
        };
    },

    getHeader: () => {
        return {
            title: 'CC INVESTMENTS APP',
            subtitle: 'User Terms and Conditions'
        };
    },

    getWelcomeNotice: () => {
        return {
            icon: 'fa fa-handshake-o',
            message: 'Welcome to the CC Investments App, powered by the <strong>Compassionate Capitalism Economic System</strong> and operated by <strong>Redirect Mall Limited</strong>. By accessing or using this app, you agree to comply with the following terms and conditions.'
        };
    },

    getClause1: () => {
        return {
            number: 1,
            title: 'Acceptance of Terms',
            text: 'By creating an account, purchasing shares, or using any feature within the app, you acknowledge that you have read, understood, and agreed to these Terms of Use.'
        };
    },

    getClause2: () => {
        return {
            number: 2,
            title: 'Membership and Share Ownership',
            text: 'Membership within the Black Wall Street Community is secured through ownership of shares in the 28 Apps system. Share ownership grants access to platform benefits, subject to eligibility requirements and compliance with community policies.',
            infoBox: {
                icon: 'fa fa-info-circle',
                text: 'Share ownership is verified through the 28 Apps system and grants you access to all platform benefits.'
            }
        };
    },

    getClause3: () => {
        return {
            number: 3,
            title: 'Dividends and Earnings',
            text: 'Dividends, bonuses, or earnings are distributed based on system performance, profitability, and qualification criteria. Earnings are not guaranteed and may vary depending on economic activity within the system.',
            warningBox: {
                icon: 'fa fa-exclamation-triangle',
                text: 'Earnings are variable and depend on system performance. Past performance does not guarantee future returns.'
            }
        };
    },

    getClause4: () => {
        return {
            number: 4,
            title: 'Investment Points and Platform Benefits',
            text: 'Investment Points earned through participation, purchases, or other qualifying activities may be used within the ecosystem as specified. Points hold value only within the platform and are subject to system rules.'
        };
    },

    getClause5: () => {
        return {
            number: 5,
            title: 'Code of Conduct',
            text: 'All users must uphold the core values of the community:',
            values: [
                { icon: 'fa fa-shield', name: 'Integrity' },
                { icon: 'fa fa-heart', name: 'Empathy' },
                { icon: 'fa fa-clock-o', name: 'Diligence' },
                { icon: 'fa fa-smile-o', name: 'Patience' },
                { icon: 'fa fa-bullhorn', name: 'Courage' },
                { icon: 'fa fa-rocket', name: 'Persistence' },
                { icon: 'fa fa-check-circle', name: 'Contentment with Progress' },
                { icon: 'fa fa-lightbulb-o', name: 'Wisdom' }
            ],
            conductNote: 'Any behaviour that damages the reputation, stability, or unity of the community may result in suspension or termination of access.'
        };
    },

    getClause6: () => {
        return {
            number: 6,
            title: 'Account Responsibility',
            text: 'Users are responsible for maintaining the confidentiality of their login credentials and for all activities conducted under their account.',
            securityBox: {
                icon: 'fa fa-lock',
                text: 'Keep your login credentials secure. Never share your password with anyone.'
            }
        };
    },

    getClause7: () => {
        return {
            number: 7,
            title: 'Compliance',
            text: 'Users agree to comply with applicable laws and regulations in their jurisdiction when participating in the platform.'
        };
    },

    getClause8: () => {
        return {
            number: 8,
            title: 'Modifications',
            text: 'The platform reserves the right to update or modify these terms when necessary. Continued use of the app constitutes acceptance of any revisions.'
        };
    },

    getClause9: () => {
        return {
            number: 9,
            title: 'Limitation of Liability',
            text: 'The platform is not liable for indirect, incidental, or consequential losses resulting from system participation. Users participate at their own discretion and risk.'
        };
    },

    getClause10: () => {
        return {
            number: 10,
            title: 'Contact Information',
            text: 'For questions regarding these Terms, please contact support through the app or via email:',
            contactEmail: 'support@cc2-28.com'
        };
    },

    getAcceptance: () => {
        return {
            title: 'Acceptance of Terms',
            message: 'By using the CC Investments App, you acknowledge that you have read, understood, and agree to be bound by all these Terms and Conditions.',
            acceptButtonText: 'I Accept the Terms',
            declineButtonText: 'I Decline'
        };
    },

    getConclusion: () => {
        return {
            message: 'Thank you for being part of the Compassionate Capitalism Economic System. Together, we build prosperity with purpose.',
            author: 'Created and Articulated by King Charles N. Lambert'
        };
    },

    getStats: () => {
        return {
            totalClauses: 10,
            totalValues: 8,
            contactEmail: 'support@cc2-28.com',
            platform: 'CC Investments App'
        };
    },

    processUserTermsForm: (formData) => {
        const { acceptance, email, userId } = formData;
        
        if (acceptance && acceptance !== 'accepted' && acceptance !== true) {
            return {
                success: false,
                message: 'You must accept the Terms and Conditions to use the CC Investments App.'
            };
        }
        
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                success: false,
                message: 'Please enter a valid email address'
            };
        }
        
        console.log('User Terms page interaction:', formData);
        
        return {
            success: true,
            message: 'Thank you for accepting the Terms and Conditions. You can now use the CC Investments App.',
            acceptanceRecorded: true
        };
    },

    getResourceLinks: () => {
        return [
            { title: 'CC Investments App Guide', url: '/resources/app-guide.pdf', icon: 'fa fa-file-pdf-o' },
            { title: 'Frequently Asked Questions', url: '/resources/app-faq.pdf', icon: 'fa fa-question-circle' },
            { title: 'Privacy Policy', url: '/privacy', icon: 'fa fa-lock' },
            { title: 'Contact Support', url: '/contact', icon: 'fa fa-envelope' }
        ];
    }
};

module.exports = userTermsService;