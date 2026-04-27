// services/channels.service.js

const channelsService = {
    getChannelsData: () => {
        return {
            title: '28 Development Channels - Compassionate Capitalism',
            page: 'channels'
        };
    },

    getHeader: () => {
        return {
            title: '28 DEVELOPMENT CHANNELS',
            icon: 'fa fa-tv'
        };
    },

    getIntroduction: () => {
        return {
            paragraphs: [
                '<strong>28DevelopmentChannels.com</strong> is the number one of the three impact points of the <strong>Compassionate Capitalism Economic System</strong>. It provides highly impactful information that bridges the development divide by addressing the knowledge divide.',
                'This information organized into seven categories across 28 basic human need sectors can be accessed using <strong>Investment Points</strong>, which are earned as discounts on everyday product purchases from <strong>RedirectMall.com</strong> (number two of the three impact points of the Compassionate Capitalism Economic System).'
            ]
        };
    },

    getBanner: () => {
        return {
            image: 'img/channels_banner.jpg',
            title: '28 Development Channels',
            subtitle: 'Bridging the Development Divide Through Knowledge'
        };
    },

    getCategories: () => {
        return [
            {
                icon: 'fa fa-lightbulb-o',
                title: 'Programs Insights',
                description: 'Turn knowledge into opportunity'
            },
            {
                icon: 'fa fa-eye',
                title: 'Products Exposure',
                description: 'See the hidden truths about products'
            },
            {
                icon: 'fa fa-film',
                title: 'News, Movies & Documentaries',
                description: 'Stay informed with data-driven stories'
            },
            {
                icon: 'fa fa-bullhorn',
                title: 'Commercials',
                description: 'Experience honest advertising'
            },
            {
                icon: 'fa fa-television',
                title: 'Soaps & Shows',
                description: 'Edutainment that celebrates African culture'
            },
            {
                icon: 'fa fa-bar-chart',
                title: 'Development Rankings',
                description: 'Measure progress across 28 sectors'
            },
            {
                icon: 'fa fa-certificate',
                title: 'Trainings & Certifications',
                description: 'Build real skills to unlock opportunities'
            },
            {
                icon: 'fa fa-music',
                title: 'Music & Podcast',
                description: 'Feed your mind with empowering sounds and conversations'
            }
        ];
    },

    getMediaLogo: () => {
        return {
            image: 'img/28dc-logo.png',
            alt: '28 Development Channel Media Logo'
        };
    },

    getSlides: () => {
        const slides = [];
        for (let i = 1; i <= 16; i++) {
            slides.push({
                image: `img/slider${i}.jpg`,
                alt: `Slider ${i}`
            });
        }
        return slides;
    },

    getFAQs: () => {
        return [
            {
                question: 'What is 28 Development Channels?',
                answer: '28 Development Channels is the number one impact point of the Compassionate Capitalism Economic System. It is a platform that provides highly impactful information bridging the development divide by addressing the knowledge divide across 28 basic human need sectors.'
            },
            {
                question: 'How does 28 Development Channels fit into the Compassionate Capitalism Economic System?',
                answer: '28 Development Channels is one of the three impact points of the Compassionate Capitalism Economic System. It works alongside Redirect Mall (Investment Points generation) and the Investment Platform to create a complete ecosystem that addresses poverty reduction and improved living standards.'
            },
            {
                question: 'What content categories does the 28 Development Channels offer?',
                answer: 'The platform offers seven categories: Programs Insights, Products Exposure, News Movies & Documentaries, Commercials, Soaps & Shows, Development Rankings, Trainings & Certifications, and Music & Podcast.'
            },
            {
                question: 'What are the 28 basic human need sectors?',
                answer: 'The 28 basic human need sectors include: Investments Portfolio, Shopping, Healthcare, Elderly Care, Education Capital, Justice, Community Development, Business Empowerment, Periodic Income, Food, Education, Gender Equality, Environment, Communications Infrastructure, Security, Transportation Infrastructure, Electricity, Information Technology, Government, Private Transportation, Water, Building Construction, Leisure and Recreation, Insurance, Banking, Credit, and Values.'
            },
            {
                question: 'Do I need Investment Points to access content?',
                answer: 'Yes, content on 28 Development Channels is accessed using Investment Points. These points are earned as discounts on everyday product purchases from Redirect Mall.'
            },
            {
                question: 'How do I earn Investment Points?',
                answer: 'Investment Points are earned as discounts on everyday product purchases from RedirectMall.com. The points accumulate and can be used to access content on 28 Development Channels or to invest in projects through the Compassionate Capitalism Investments Platform.'
            },
            {
                question: 'What training and certifications are offered?',
                answer: 'The platform offers training programs and certifications across all 28 sectors, focusing on skill acquisition, career building, and professional development. These certifications help individuals unlock economic opportunities and advance their careers.'
            },
            {
                question: 'Who can use 28 Development Channels?',
                answer: 'Anyone who has earned Investment Points through purchases on Redirect Mall can access the platform. Membership is open to individuals committed to learning, growth, and participating in the Compassionate Capitalism Economic System.'
            },
            {
                question: 'What does "Democratic Economy" mean on 28 Development Channels?',
                answer: 'Democratic Economy refers to a market system that operates "of the people, by the people, for the people." It replaces corporate monopoly and economic imperialism with local production support, guaranteed market access for local producers, and community-controlled economic destiny.'
            }
        ];
    },

    getSocialShare: () => {
        return {
            title: 'Share with Friends',
            platforms: [
                { name: 'Facebook', icon: 'fa fa-facebook', class: 'facebook', shareFunction: 'shareOnFacebook' },
                { name: 'Twitter', icon: 'fa fa-twitter', class: 'twitter', shareFunction: 'shareOnTwitter' },
                { name: 'Pinterest', icon: 'fa fa-pinterest', class: 'pinterest', shareFunction: 'shareOnPinterest' },
                { name: 'LinkedIn', icon: 'fa fa-linkedin', class: 'linkedin', shareFunction: 'shareOnLinkedIn' }
            ]
        };
    },

    getConclusion: () => {
        return {
            message: 'Through 28 Development Channels, we bring knowledge, transparency, and opportunity to all — turning information into empowerment and bridging the development divide across Africa and the world.',
            author: 'Created and Articulated by King Charles N. Lambert'
        };
    },

    getStats: () => {
        return {
            totalCategories: 8,
            totalSectors: 28,
            totalSlides: 16,
            totalFAQs: 9
        };
    },

    processChannelsForm: (formData) => {
        const { email, name, interest, question } = formData;
        
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                success: false,
                message: 'Please enter a valid email address'
            };
        }
        
        console.log('Channels page interaction:', formData);
        
        return {
            success: true,
            message: 'Thank you for your interest in 28 Development Channels! We will contact you soon.'
        };
    },

    getResourceLinks: () => {
        return [
            { title: 'Channel Guide', url: '/resources/channels-guide.pdf', icon: 'fa fa-file-pdf-o' },
            { title: '28 Sectors Overview', url: '/resources/28-sectors.pdf', icon: 'fa fa-book' },
            { title: 'Investment Points Guide', url: '/resources/investment-points-guide.pdf', icon: 'fa fa-download' },
            { title: 'Contact Support', url: '/contact', icon: 'fa fa-envelope' }
        ];
    }
};

module.exports = channelsService;