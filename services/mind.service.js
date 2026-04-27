// services/mind.service.js

const mindService = {
    getMindData: () => {
        return {
            title: 'The Mind of Charles N. Lambert',
            page: 'mind'
        };
    },

    getIntroduction: () => {
        return {
            paragraphs: [
                'Capitalism as an economic system has had and continues to have its share of criticism, blame, and even hatred. While the case for opposing positions toward Capitalism is strong, we cannot rule out that Capitalism, for the most part, actually works better than any other economic system in harnessing the best of man\'s potential and creating better living standards.',
                'However, there is a solid need to advance Capitalism in a way that acknowledges the voices of the critics and embraces the participation of those left out but without hampering the basic principles which make Capitalism effective in fostering innovation and development.',
                'This very difficult, somewhat oxymoron task has been achieved through the Compassionate Capitalism economic system created by the innovator King Charles N. Lambert. These are some key ways this new system advances Capitalism to a much higher place.'
            ],
            highlightText: 'This very difficult, somewhat oxymoron task has been achieved through the Compassionate Capitalism economic system created by the innovator King Charles N. Lambert. These are some key ways this new system advances Capitalism to a much higher place.'
        };
    },

    getAdvances: () => {
        return [
            {
                id: 1,
                number: '01',
                title: 'INDIVIDUALISM',
                vs: 'COMMUNAL GAIN',
                capitalismView: 'Believes that only individual gain can drive economic activities and hence appeals to the worst human vices in selfishness, promoting individualism and self-centeredness. These create an endless rat race for all, breeding crime, destroying empathy as a value, and simply multiplying man\'s inhumanity to man.',
                ccView: 'Promotes communal gain as the secret to sustainable individual growth. CC is an economic system that anchors on public enlightenment, which educates the public that the basic safety of their prosperity lies in the well-being of their neighbors and that the joy of the harvest is best experienced when shared by a community of people.',
                icon: 'fa fa-users',
                color: '#DC0028'
            },
            {
                id: 2,
                number: '02',
                title: 'HIGHEST ASPIRATIONS',
                vs: 'CONTENTMENT',
                capitalismView: 'Inherently seeks to inspire man\'s most incredible capacity by pointing to the pursuit of the highest aspirations. These aspirations become unreachable for most people, creating frustrations, depression, disillusionment, and a total lack of satisfaction with life. Pursuing these mostly unfounded highest aspirations leads to the worst display of human vices invoking greed, envy, exploitation, fraud, corruption, deception, oppression, anger, hate, murder, and every other horrific trait known to man.',
                ccView: 'Believes in and promotes the satisfaction that comes from contentment as a more sustainable catalyst for the inspiration of man to strive. Contentment goals are much easier to achieve, giving the individual a sense of value and the desire to continue participating in the economic system. Contentment also significantly reduces the application of vices bringing more peaceful societies where love triumphs over hate.',
                icon: 'fa fa-star',
                color: '#ff9800'
            },
            {
                id: 3,
                number: '03',
                title: 'CREATE MORE WANTS',
                vs: 'MEET BASIC HUMAN NEEDS',
                capitalismView: 'Thrives so much on "make-belief" and the creation of wants through needless innovations backed by endless commercials and marketing schemes, leaving consumers feeling exploited, deceived and abused by the communication channels and brands they trusted. The creation of wants also accounts for gross inequality in access to basic needs as consumer priorities become twisted, abandoning essentials for luxuries.',
                ccView: 'Calls for focus by all participants, from producers to communicators and consumers, on increasing access to basic human needs and living standards. CC advocates for empathy-driven innovations, need-centered solutions, and informative communication messages through public education that empowers the consumer and the measurement of corporate value by impact in increasing access to basic needs.',
                icon: 'fa fa-heart',
                color: '#2196f3'
            },
            {
                id: 4,
                number: '04',
                title: 'MAXIMIZE PROFITS',
                vs: 'EMPOWER THE CONSUMER',
                capitalismView: 'One of the worst effects of Capitalism on humanity is the doctrine of maximizing profits to the detriment of everyone, from consumers to the government. It should be enough to make a profit, but maximizing profits brings out all the vices a corporation can exhibit, from deception to exploitation and everything else in between.',
                ccView: 'Avoids this very myopic view and believes that the most significant investment the corporation can make is in the consumer since the corporation needs the consumer to earn more tomorrow. This ideology borrowed from nature in "grazing and then milking the cow" promotes the revolutionary concept of "Investment Points." These are discounts on product purchases issued by producers and can be used on the Compassionate Capitalism Investments platform to invest in commercial projects for financial returns or in career advancement through payment for training in certificates to earn.',
                icon: 'fa fa-line-chart',
                color: '#4caf50'
            },
            {
                id: 5,
                number: '05',
                title: 'ASSIGN BLAMES',
                vs: 'TAKING RESPONSIBILITY',
                capitalismView: 'The government is the most extraordinary victim of the pure capitalist system, and countless governments have been toppled or lost credibility with their citizens because of the menace of Capitalism in their societies. This is quite simply because the producers\' nefarious and exploitative activities leave the public in financial ruins, and they simultaneously work with the media they mostly own to assign blame to the government. Producers\' endless tax evading schemes also starve the governments of much-needed public investment funds, which subsequently accounts for failure in public service delivery by governments and citizens\' outcry.',
                ccView: 'Acknowledges the very influential position and power of corporations in the well-being of the public hence promoting more responsible work on issues. This comes from the belief that only corporations which take responsibility for the well-being of the market participants have a long-term future in that market.',
                icon: 'fa fa-balance-scale',
                color: '#9c27b0'
            }
        ];
    },

    getVideoCategories: () => {
        return [
            {
                id: 1,
                title: 'Core Teachings & System Overview',
                icon: 'fa fa-star',
                videos: [
                    { title: 'Compassionate Capitalism Economic System Revolution Explained', duration: '7 min', date: 'February 2021', vimeoId: '512424768', description: 'A comprehensive explanation of how Compassionate Capitalism revolutionizes the global economic system.' },
                    { title: 'Understanding the BWS and Redirect Mall', duration: '20 min', date: 'June 2020', vimeoId: '429003402', description: 'Deep dive into Black Wall Street and the Redirect Mall ecosystem.' },
                    { title: 'A risk-free way to become a shareholder of the Compassionate Capitalism Economic System', duration: '28 min', date: 'May 2024', vimeoId: '509869568', description: 'Learn how to become a shareholder in the Compassionate Capitalism system with zero risk.' }
                ]
            },
            {
                id: 2,
                title: 'Training & Tutorials',
                icon: 'fa fa-graduation-cap',
                videos: [
                    { title: 'Family Monthly Income Plan', duration: '5 min', date: 'July 2024', vimeoId: null, description: 'Step-by-step guide to implementing the Family Monthly Income Plan for sustainable household earnings.' },
                    { title: 'Family Monthly Income Plan Customer Referral', duration: '5 min', date: 'April 2025', vimeoId: null, description: 'Master the customer referral system to maximize your Family Monthly Income Plan benefits.' },
                    { title: 'How to Buy on Redirect Mall', duration: '2 min', date: 'June 2024', vimeoId: null, description: 'Quick tutorial on making purchases through the Redirect Mall platform.' },
                    { title: 'Why You Should Buy from Redirect Mall', duration: '2 min', date: 'June 2024', vimeoId: null, description: 'Discover the benefits and advantages of shopping at Redirect Mall.' },
                    { title: 'How to Monitor and Use Your Investment Points', duration: '4 min', date: 'June 2024', vimeoId: null, description: 'Learn to track and maximize your Investment Points for optimal returns.' },
                    { title: 'How to Start Receiving Your Dividends and Withdraw Them', duration: '5 min', date: 'July 2024', vimeoId: null, description: 'Complete guide to dividend collection and withdrawal procedures.' }
                ]
            },
            {
                id: 3,
                title: 'Mindset & Philosophy',
                icon: 'fa fa-brain',
                videos: [
                    { title: 'Required mindset to work on Compassionate Capitalism', duration: '11 min', date: 'June 2024', vimeoId: null, description: 'Essential mental frameworks for success within the Compassionate Capitalism system.' },
                    { title: 'Required Mindset for Consumers in Compassionate Capitalism', duration: '5 min', date: 'June 2024', vimeoId: null, description: 'Consumer mindset shift needed to fully benefit from the Compassionate Capitalism ecosystem.' },
                    { title: 'The rising of a king', duration: '2 min', date: 'June 2024', vimeoId: null, description: 'The inspiring journey and rise of King Charles N. Lambert as a visionary leader.' },
                    { title: 'Reinstating Power of the King', duration: '3 min', date: 'July 2024', vimeoId: null, description: 'Understanding the restoration of sovereign economic power and leadership.' }
                ]
            },
            {
                id: 4,
                title: 'Economic War Series',
                icon: 'fa fa-bolt',
                showcaseUrl: 'https://vimeo.com/showcase/6811933',
                episodes: [
                    { number: 1, title: 'Are there billions to be made and shared in Africa?', duration: '19 min', date: 'May 2020' },
                    { number: 2, title: 'Can machines make money for Africans?', duration: '21 min', date: 'June 2020' },
                    { number: 3, title: 'Where in Africa can I earn millions in 24 months?', duration: '20 min', date: 'June 2020' },
                    { number: 4, title: 'Where in Africa can I earn $1,000 dollars per day?', duration: '17 min', date: 'June 2020' },
                    { number: 5, title: 'Why are westerners rich?', duration: '20 min', date: 'June 2020' },
                    { number: 6, title: 'Why are Africans poor?', duration: '20 min', date: 'June 2020' },
                    { number: 7, title: 'Who has more money? Governments or Corporations?', duration: '19 min', date: 'June 2020' },
                    { number: 8, title: 'Is focus on politics keeping Africans poor?', duration: '19 min', date: 'June 2020' },
                    { number: 9, title: 'Who Creates Jobs in Society?', duration: '21 min', date: 'July 2020' },
                    { number: 10, title: 'Does Economic War help Job Creating?', duration: '18 min', date: 'July 2020' },
                    { number: 11, title: 'Impact of Capital Flight', duration: '21 min', date: 'July 2020' },
                    { number: 12, title: 'How dangerous is importation', duration: '22 min', date: 'July 2020' },
                    { number: 13, title: 'The Ineffectiveness of welfare', duration: '25 min', date: 'August 2020' },
                    { number: 14, title: 'Welfare - Trap of Imperial Powers', duration: '26 min', date: 'August 2020' },
                    { number: 15, title: 'One Vision, One Direction, key to Africa\'s economic independence', duration: '25 min', date: 'August 2020' },
                    { number: 16, title: 'Political Independence, enemy of Africa\'s economic independence', duration: '25 min', date: 'August 2020' },
                    { number: 17, title: 'Rate of Poverty in Africa', duration: '23 min', date: 'August 2020' },
                    { number: 18, title: 'Poverty is Man made', duration: '24 min', date: 'August 2020' },
                    { number: 19, title: 'The Importance of data management in development', duration: '26 min', date: 'August 2020' },
                    { number: 20, title: 'Africa, A Rural Jungle of no Data', duration: '23 min', date: 'August 2020' },
                    { number: 21, title: 'The Wickedness of Western Development Institutions', duration: '26 min', date: 'August 2020' },
                    { number: 22, title: 'Knowledge the important foundation for economic liberation', duration: '22 min', date: 'August 2020' },
                    { number: 23, title: 'Africa and Poverty focused educational system', duration: '27 min', date: 'August 2020' },
                    { number: 24, title: 'Education for GDP, the model education', duration: '22 min', date: 'August 2020' },
                    { number: 25, title: 'Values the foundation for a new Africa', duration: '26 min', date: 'August 2020' },
                    { number: 26, title: 'Integrity and Billionaires', duration: '26 min', date: 'August 2020' }
                ]
            },
            {
                id: 5,
                title: 'Africa Development & Empowerment',
                icon: 'fa fa-globe',
                videos: [
                    { title: 'Responsibilities of Board Members in Pursuit of Economic Independence for Africa', duration: '3 min', date: 'July 2024', vimeoId: null, description: 'Key responsibilities for board members working toward Africa\'s economic freedom.' },
                    { title: 'Connecting Economic Opportunities in Africa to the Diaspora', duration: '3 min', date: 'July 2024', vimeoId: null, description: 'Bridging the gap between African economic opportunities and the global diaspora.' },
                    { title: 'India Africa Technology Pact', duration: '31 min', date: 'December 2021', vimeoId: null, description: 'Exploring the technology partnership between India and Africa.' },
                    { title: 'Financially Independent Women Movement', duration: '5 min', date: 'April 2025', vimeoId: null, description: 'Empowering women toward financial independence through Compassionate Capitalism.' },
                    { title: 'Labourers For Super Power Africa', duration: 'Coming Soon', date: null, vimeoId: null, description: 'Upcoming series on building Africa into a superpower through collective labor.' }
                ]
            },
            {
                id: 6,
                title: 'Marketing Agency Franchise Program',
                icon: 'fa fa-bullhorn',
                videos: [
                    { title: 'Understanding Marketing Agencies Franchise in the Compassionate Capitalism Economic System', duration: '13 min', date: 'June 2024', vimeoId: null, description: 'Complete overview of the Marketing Agency Franchise model.' },
                    { title: 'Become a Marketing Agency & Promoter for Economic Change in Africa', duration: '4 min', date: 'June 2024', vimeoId: null, description: 'How to join the movement as a Marketing Agency promoter.' },
                    { title: 'How to onboard Marketing Agency on Compassionate Capitalism', duration: '3 min', date: 'June 2024', vimeoId: null, description: 'Step-by-step onboarding process for new Marketing Agencies.' },
                    { title: 'Part 1 - Learn How to begin your own Marketing Agency receiving $1Million dollars every year indefinitely', duration: '46 min', date: 'June 2024', vimeoId: null, description: 'First part of the comprehensive training series.' },
                    { title: 'Part 2 - Learn How to begin your own Marketing Agency receiving $1Million dollars every year indefinitely', duration: '40 min', date: 'June 2024', vimeoId: null, description: 'Second part of the comprehensive training series.' },
                    { title: 'Part 3 - Learn How to begin your own Marketing Agency receiving $1Million dollars every year indefinitely', duration: '42 min', date: 'June 2024', vimeoId: null, description: 'Third part of the comprehensive training series.' },
                    { title: 'Amazing Life Changing Jobs for Youths 18 to 22 years', duration: '5 min', date: 'June 2024', vimeoId: null, description: 'Youth employment opportunities within the Compassionate Capitalism system.' }
                ]
            },
            {
                id: 7,
                title: 'Additional Teachings',
                icon: 'fa fa-vimeo',
                videos: [
                    { title: 'Address to African Americans', duration: null, date: null, vimeoId: '453954631', description: 'Special address to the African American community.' },
                    { title: 'Explains Black Wall Street relationship with Africa', duration: null, date: null, vimeoId: '429003402', description: 'Understanding the BWS-Africa connection.' },
                    { title: 'African American youth calling for action', duration: null, date: null, vimeoId: '467697131', description: 'Youth mobilization for economic change.' },
                    { title: 'Warning about resource exploitation', duration: null, date: null, vimeoId: '467703815', description: 'Critical warning about resource exploitation in Africa.' },
                    { title: 'Uganda\'s greatness lies in Pan Africanism', duration: null, date: null, vimeoId: '525590323', description: 'Pan Africanism as the path to Uganda\'s greatness.' }
                ]
            }
        ];
    },

    getConclusion: () => {
        return {
            message: 'Through redirecting global commerce by implementing Compassionate Capitalism and its 5 significant advances, we will turn the earth into a kingdom of shared prosperity, dignity, and purpose—fulfilling the Creator\'s original intent for humanity.',
            author: 'Created and Articulated by King Charles N. Lambert'
        };
    },

    getStatistics: () => {
        return {
            totalVideos: 55,
            totalEpisodes: 26,
            categoriesCount: 7,
            totalDuration: '400+ minutes',
            impact: 'Transforming global commerce through compassionate economics'
        };
    },

    processMindForm: (formData) => {
        // Handle any forms on the mind page (newsletter, inquiry, etc.)
        const { email, name, interest } = formData;
        
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                success: false,
                message: 'Please enter a valid email address'
            };
        }
        
        console.log('Mind page interaction:', formData);
        
        return {
            success: true,
            message: 'Thank you for your interest in the teachings of King Charles N. Lambert! We will contact you soon.'
        };
    },

    getResourceLinks: () => {
        return [
            { title: 'Economic War Full Series', url: 'https://vimeo.com/showcase/6811933', icon: 'fa fa-play-circle' },
            { title: 'White Paper', url: '/resources/compassionate-capitalism-whitepaper.pdf', icon: 'fa fa-file-pdf-o' },
            { title: 'Training Manual', url: '/resources/training-manual.pdf', icon: 'fa fa-book' },
            { title: 'Marketing Agency Guide', url: '/resources/marketing-agency-guide.pdf', icon: 'fa fa-download' }
        ];
    }
};

module.exports = mindService;