// services/ranking.service.js

const rankingService = {
    getRankingData: () => {
        return {
            title: 'Development Rankings - Compassionate Capitalism',
            page: 'ranking'
        };
    },

    getIntroduction: () => {
        return {
            cards: [
                {
                    icon: 'fa fa-bar-chart',
                    title: 'Truth in Measurement',
                    description: 'In the make believe world created by Free Market Capitalism, truth is a scarce commodity, data fictitious and facts obscure. This is a major hindrance to development and increasing access to basic human needs because measurement is the first process to change.'
                },
                {
                    icon: 'fa fa-newspaper-o',
                    title: 'Real Data, Real People',
                    description: 'Development Rankings is an initiative of the Compassionate Capitalism economic system and presents real life data submitted by real person surveys by certified investigative journalists working for the system across the world and through allocated job centres and jurisdictions.'
                },
                {
                    icon: 'fa fa-database',
                    title: 'Purpose of Rankings',
                    description: 'Development Rankings cover the 28 basic human needs which the Compassionate Capitalism economic system is focussed on increasing access to the needs for all the inhabitants of the world according to the will of the God of Abraham. These rankings are then useful for the creation of projects to increase access, allocation of Investment Points, policy formulation by institutions and even public rally.',
                    isHighlight: true
                }
            ]
        };
    },

    getBanner: () => {
        return {
            image: 'img/ranking_banner.jpg',
            title: '28 Basic Human Needs',
            subtitle: 'Measured Across 600 Jurisdictions & 100,000 Pan African Job Centres'
        };
    },

    getBasicNeeds: () => {
        return [
            { name: 'Investments Portfolio', icon: 'fa fa-line-chart' },
            { name: 'Shopping', icon: 'fa fa-shopping-cart' },
            { name: 'Healthcare', icon: 'fa fa-hospital-o' },
            { name: 'Elderly Care', icon: 'fa fa-users' },
            { name: 'Education Capital', icon: 'fa fa-graduation-cap' },
            { name: 'Justice', icon: 'fa fa-gavel' },
            { name: 'Community Development', icon: 'fa fa-building' },
            { name: 'Business Empowerment', icon: 'fa fa-briefcase' },
            { name: 'Periodic Income', icon: 'fa fa-calendar' },
            { name: 'Food', icon: 'fa fa-cutlery' },
            { name: 'Education', icon: 'fa fa-book' },
            { name: 'Gender Equality', icon: 'fa fa-venus-mars' },
            { name: 'Environment', icon: 'fa fa-leaf' },
            { name: 'Communications Infrastructure', icon: 'fa fa-wifi' },
            { name: 'Security', icon: 'fa fa-shield' },
            { name: 'Transportation Infrastructure', icon: 'fa fa-road' },
            { name: 'Electricity', icon: 'fa fa-bolt' },
            { name: 'Information Technology', icon: 'fa fa-laptop' },
            { name: 'Government', icon: 'fa fa-university' },
            { name: 'Private Transportation', icon: 'fa fa-car' },
            { name: 'Water', icon: 'fa fa-tint' },
            { name: 'Building Construction', icon: 'fa fa-building-o' },
            { name: 'Leisure and Recreation', icon: 'fa fa-futbol-o' },
            { name: 'Insurance', icon: 'fa fa-umbrella' },
            { name: 'Banking', icon: 'fa fa-bank' },
            { name: 'Credit', icon: 'fa fa-credit-card' },
            { name: 'Values', icon: 'fa fa-heart' }
        ];
    },

    getAfricaRankings: () => {
        return {
            title: 'Development Rankings Graph for Africa',
            jurisdictions: 600,
            jobCentres: 100000,
            description: 'Summation of Rankings in 600 Jurisdictions and 100,000 Pan African Job Centres',
            chartData: [
                { category: 'Healthcare', value: 45 },
                { category: 'Education', value: 52 },
                { category: 'Water', value: 38 },
                { category: 'Electricity', value: 31 },
                { category: 'Banking', value: 58 },
                { category: 'Security', value: 43 }
            ]
        };
    },

    getAccessNotice: () => {
        return {
            icon: 'fa fa-lock',
            title: 'Platform Access Required',
            message: 'You can view Development Rankings for your region if you are enrolled on any of the 28 Compassionate Capitalism platforms.',
            buttonText: 'Learn More About Enrollment',
            buttonLink: '/contact'
        };
    },

    getConclusion: () => {
        return {
            message: 'Through redirecting global commerce by implementing Compassionate Capitalism and its Development Rankings initiative, we bring transparency, accountability, and measurable progress to the 28 basic human needs — turning the earth into a kingdom of shared prosperity, dignity, and purpose.',
            author: 'Created and Articulated by King Charles N. Lambert'
        };
    },

    getStatistics: () => {
        return {
            totalNeeds: 28,
            jurisdictions: 600,
            jobCentres: 100000,
            regions: 'Global',
            impact: 'Measuring what matters for human development'
        };
    },

    processRankingForm: (formData) => {
        // Handle any forms on the ranking page (newsletter, inquiry, access request, etc.)
        const { email, name, region, interest } = formData;
        
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                success: false,
                message: 'Please enter a valid email address'
            };
        }
        
        console.log('Ranking page interaction:', formData);
        
        return {
            success: true,
            message: 'Thank you for your interest in Development Rankings! A representative will contact you with access information.'
        };
    },

    getResourceLinks: () => {
        return [
            { title: 'Full Rankings Report', url: '/resources/development-rankings-report.pdf', icon: 'fa fa-file-pdf-o' },
            { title: '28 Needs Framework', url: '/resources/28-needs-framework.pdf', icon: 'fa fa-book' },
            { title: 'Methodology Guide', url: '/resources/rankings-methodology.pdf', icon: 'fa fa-download' },
            { title: 'Regional Data Access', url: '/contact', icon: 'fa fa-lock' }
        ];
    }
};

module.exports = rankingService;