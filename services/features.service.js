// services/features.service.js

const featuresService = {
    getFeaturesData: () => {
        return {
            title: '7 Core Features - Compassionate Capitalism',
            page: 'features'
        };
    },

    getFeatures: () => {
        return [
            {
                id: 1,
                number: '01',
                title: 'INVESTMENT POINTS',
                description: 'Graze the cow you milk by ensuring that all purchases for goods or services are rewarded with a discount in cost which is given as Investment Points and can be used by the consumer to make investments in need based commercial projects for returns or in career building through certificates to earn.',
                icon: 'fa fa-credit-card',
                color: '#DC0028'
            },
            {
                id: 2,
                number: '02',
                title: '28 NEED BASED SECTORS',
                description: 'Prioritize access to 28 basic human needs for all before any further aspirations, promoting contentment as a core value and empathy driven investments as the new norm with triple bottom-line pursuits of finance, social good and environment.',
                icon: 'fa fa-th-large',
                color: '#ff9800'
            },
            {
                id: 3,
                number: '03',
                title: 'DEVELOPMENT RANKINGS',
                description: 'Coordinate unbiased measurement and public reporting of access to the 28 basic human needs for each segment of the world in comparison to a more developed region, highlighting areas of deficiency for investments, policy formulation and public rally.',
                icon: 'fa fa-trophy',
                color: '#2196f3'
            },
            {
                id: 4,
                number: '04',
                title: 'DEMOCRATIC ECONOMY',
                description: 'Reduce and eradicate market monopoly and economic imperialism through local production support and local producer\'s market guarantee through the implementation of a democratic economy that promotes market of the people, by the people, for the people.',
                icon: 'fa fa-balance-scale',
                color: '#4caf50'
            },
            {
                id: 5,
                number: '05',
                title: 'ECONOMIC VALUE',
                description: 'Organize and strengthen the labour market through promotion of economy focussed educational system, skill acquisition and character centred individual capacity building, measurement and reward that eliminates favouritism, nepotism, tribalism and mediocrity in labour contribution to the production process.',
                icon: 'fa fa-line-chart',
                color: '#9c27b0'
            },
            {
                id: 6,
                number: '06',
                title: 'TRINITY ACCOUNTS',
                description: 'Structure and Implement a triple financial accounts system that involves expenditures through the Shopping Account, empowering the shopper through the Investment Points Account and receiving returns on investments through the Returns Account ensuring the absolute end of lack, poverty, despair and economic hopelessness.',
                icon: 'fa fa-bank',
                color: '#00bcd4'
            },
            {
                id: 7,
                number: '07',
                title: 'CONSUMER EDUCATION',
                description: 'Prohibit the concept of make-belief in advertising and promote the education of consumers in all offers made by producers helping to eradicate exploitation, deception, fraud and even death of consumers.',
                icon: 'fa fa-graduation-cap',
                color: '#e91e63'
            }
        ];
    },

    getConclusion: () => {
        return {
            message: 'Through redirecting global commerce by implementing Compassionate Capitalism and its 7 core features, we will turn the earth to the kingdom of the God of Abraham and meet the Creator\'s original intent for humanity.',
            author: 'Created and Articulated by King Charles N. Lambert'
        };
    },

    getStatistics: () => {
        return {
            featuresCount: 7,
            sectorsCount: 28,
            accountTypes: 3,
            countriesReach: 'Global',
            impact: 'Transforming global commerce through compassionate economics'
        };
    },

    processFeaturesForm: (formData) => {
        // Handle any forms on the features page (newsletter, inquiry, etc.)
        const { email, name, interest } = formData;
        
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                success: false,
                message: 'Please enter a valid email address'
            };
        }
        
        console.log('Features page interaction:', formData);
        
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

module.exports = featuresService;