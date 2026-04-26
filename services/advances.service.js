// services/advances.service.js

const advancesService = {
    getAdvancesData: () => {
        return {
            title: '5 Significant Advances of Compassionate Capitalism',
            page: 'advances'
        };
    },

    getAdvances: () => {
        return [
            {
                id: 1,
                number: '01',
                title: 'END OF ECONOMIC HOPELESSNESS',
                description: 'Eradicates lack, poverty, and despair through the Trinity Accounts system—Shopping Account, Investment Points Account, and Returns Account—ensuring every consumer becomes an investor and every purchase builds future financial security.',
                icon: 'fa fa-shield',
                color: '#DC0028'
            },
            {
                id: 2,
                number: '02',
                title: 'DEMOCRATIZATION OF THE ECONOMY',
                description: 'Replaces corporate monopoly and economic imperialism with a market of the people, by the people, for the people. Local producers receive guaranteed market access, and communities gain control over their economic destiny.',
                icon: 'fa fa-users',
                color: '#ff9800'
            },
            {
                id: 3,
                number: '03',
                title: 'NEEDS-BASED INVESTMENT PRIORITIZATION',
                description: 'Redirects capital toward 28 basic human needs before funding aspirations or luxuries. This ensures empathy-driven investments, contentment as a core value, and triple bottom-line results: financial return, social good, and environmental stewardship.',
                icon: 'fa fa-heart',
                color: '#2196f3'
            },
            {
                id: 4,
                number: '04',
                title: 'MERITOCRATIC LABOR VALUE SYSTEM',
                description: 'Eliminates favoritism, nepotism, tribalism, and mediocrity by organizing the labor market around verified skill acquisition, character development, and measurable economic contribution—rewarding actual value rather than connections.',
                icon: 'fa fa-star',
                color: '#4caf50'
            },
            {
                id: 5,
                number: '05',
                title: 'CONSUMER SOVEREIGNTY THROUGH EDUCATION',
                description: 'Bans deceptive "make-belief" advertising and replaces it with full consumer education. Shoppers understand exactly what they are buying, under what terms, and with what long-term consequences—ending exploitation, fraud, and preventable consumer deaths.',
                icon: 'fa fa-lightbulb',
                color: '#9c27b0'
            }
        ];
    },

    getConclusion: () => {
        return {
            message: 'These five advances redirect global commerce from extraction to empowerment. By implementing Compassionate Capitalism, we transform the earth into a kingdom of shared prosperity, dignity, and purpose—fulfilling the Creator\'s original intent for humanity.',
            author: 'Created and Articulated by King Charles N. Lambert'
        };
    },

    getStatistics: () => {
        return {
            advancesCount: 5,
            sectorsCount: 28,
            accountTypes: 3,
            countriesReach: 'Global',
            impact: 'Transforming global commerce through compassionate economics'
        };
    },

    processAdvancesForm: (formData) => {
        // Handle any forms on the advances page (newsletter, inquiry, etc.)
        const { email, name, interest } = formData;
        
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                success: false,
                message: 'Please enter a valid email address'
            };
        }
        
        console.log('Advances page interaction:', formData);
        
        return {
            success: true,
            message: 'Thank you for your interest in Compassionate Capitalism! We will contact you soon.'
        };
    },

    getResourceLinks: () => {
        return [
            { title: 'White Paper', url: '/resources/compassionate-capitalism-whitepaper.pdf', icon: 'fa fa-file-pdf-o' },
            { title: 'Video Series', url: '/resources/videos', icon: 'fa fa-play-circle' },
            { title: 'Case Studies', url: '/resources/case-studies', icon: 'fa fa-book' },
            { title: 'Implementation Guide', url: '/resources/guide', icon: 'fa fa-download' }
        ];
    }
};

module.exports = advancesService;