// services/investment.service.js

const investmentService = {
    getInvestmentData: () => {
        return {
            title: 'Compassionate Capitalism Investments Platform',
            page: 'investment'
        };
    },

    getIntroduction: () => {
        return {
            subtitle: 'Leveraging Strength in Numbers for Sustainable Access to Basic Human Needs',
            mainParagraphs: [
                'Compassionate Capitalism Investments needs to leverage on the strength in numbers of both professionals and consumers who are directly affected by the industry to effectively drive increased and sustainable access to this basic human need.',
                'Compassionate Capitalism Investments Platform provides the opportunity for all to come together and use both the tools and the core ideologies available through the platform in achieving this noble task.'
            ],
            features: [
                'Education', 'Empathy Driven Programs', 'Development Data', 'Current Information',
                'Communication', 'Finance', 'Jobs', 'Training', 'Bonuses', 'Gratuity', 'Taxes',
                'Services', 'Investments', 'Supplies', 'Interactions', 'Notifications',
                'Innovations', 'Certifications', 'And More'
            ],
            ctaText: 'From education to empathy driven programs, development data to current information, communication to finance, jobs to training, bonuses to gratuity, taxes to services, investments to supplies, interactions to notifications, innovations, certifications and more, the platform is designed to be the most pragmatic engagement avenue for the industry.',
            buttonText: 'Sign up for one of the available programs today',
            footerText: 'and experience the power of Compassionate Capitalism Investments Platform.'
        };
    },

    getHowToJoin: () => {
        return {
            title: 'How to Join',
            subtitle: 'Becoming a member of the Black Wall Street Community',
            shareholder: {
                title: 'Joining the Black Wall Street Community begins by becoming a <span>28 Apps Shareholder</span>',
                points: [
                    'Secure your membership in the community',
                    'Participate in the Compassionate Capitalism Economic System',
                    'Enjoy up to $300 monthly lifetime dividends, powered by the profits of the Compassionate Capitalism Economic System, plus access to expanding wealth opportunities.',
                    'Gain access to education, opportunities, and community empowerment platforms'
                ],
                disclaimer: 'This is not charity. This is ownership.'
            },
            legacy: {
                title: 'Be Part of Africa\'s Economic Reawakening',
                paragraphs: [
                    'Black Wall Street is a community of professionals working together to deploy, manage and secure a new economic system for Africa called the Compassionate Capitalism Economic System. This system is designed to reduce poverty and improve the standard of living across the continent.',
                    'As part of this, we are building a network of over 62,400 professionals who will actively deploy and support this system across 28 different sectors. These people now become members of the Black Wall Street Community.',
                    'This community exists to help members grow wealthy while uplifting others, proving that prosperity and compassion can coexist. It is a modern expression of an ancient economic model that has existed for over 100 years, now revived and reengineered for Africa\'s future.'
                ],
                highlightText: 'When you join the Black Wall Street Community, you are not standing on the sidelines of history. You are actively participating in an economic revolution that prioritizes Africa first and places capital back in the hands of its people.'
            }
        };
    },

    getReasonsToJoin: () => {
        return [
            {
                number: '01',
                title: 'PARTICIPATE',
                description: 'in Africa\'s economic revolution',
                isHighlight: false
            },
            {
                number: '02',
                title: 'BUILD',
                description: 'personal wealth while helping uplift the poor',
                isHighlight: false
            },
            {
                number: '03',
                title: 'BE PART',
                description: 'of a proven system that creates millionaires from ordinary Africans',
                isHighlight: false
            },
            {
                number: '04',
                title: 'SHARE',
                description: 'in mutual prosperity with like-minded Africans worldwide',
                isHighlight: false
            },
            {
                number: '05',
                title: 'JOIN',
                description: 'a historic economic legacy revived for modern times',
                isHighlight: false
            },
            {
                number: '06',
                title: 'GAIN ACCESS',
                description: 'to structured wealth-building opportunities',
                isHighlight: false
            },
            {
                number: '07',
                title: 'CONNECT',
                description: 'with influential leaders, investors, and change-makers',
                isHighlight: false
            },
            {
                number: '08',
                title: 'OPERATE',
                description: 'within a values-driven, faith-based economic system',
                isHighlight: false
            },
            {
                number: '09',
                title: 'BENEFIT',
                description: 'from collective capital and community growth',
                isHighlight: false
            },
            {
                number: '10',
                title: 'GROW',
                description: 'within a community built on unity, discipline, and vision',
                isHighlight: false
            },
            {
                number: '11',
                title: 'TAKE OWNERSHIP',
                description: 'of Africa\'s economic destiny',
                isHighlight: true
            }
        ];
    },

    getMembership: () => {
        return {
            title: 'MEMBERSHIP',
            subtitle: 'A Commitment to Learn, Worship, and Prosper',
            description: 'Membership in the Black Wall Street Community is open to individuals who commit to its core values and guiding principles. Members are united by the shared mandate to Learn, Worship, and Prosper, as guided by King Lambert.',
            confirmationText: 'Membership is confirmed through the 28 Apps Shareholder, which signifies ownership, responsibility, and active participation in the community.',
            noFees: [
                { text: 'No membership fees', icon: 'fa fa-times-circle' },
                { text: 'No dues', icon: 'fa fa-times-circle' },
                { text: 'No offerings', icon: 'fa fa-times-circle' },
                { text: 'No tithes', icon: 'fa fa-times-circle' }
            ],
            structureNote: 'The community is sustained through structure, not pressure.'
        };
    },

    getMembershipCategories: () => {
        return {
            general: {
                title: 'General Members',
                icon: 'fa fa-users',
                description: 'These are members who own fewer than 34 Level 1 slots and are committed to growth, contribution, and collective progress within the Black Wall Street Community.',
                tag: 'Entry Level',
                color: '#2196f3'
            },
            xFactor: {
                title: 'BWS X Factor Members',
                icon: 'fa fa-diamond',
                description: 'An exclusive group limited to members who own 34 or more Level 1 shares, also known as Organic UPAP slots.',
                additionalText: 'These members are positioned for accelerated wealth creation, with the goal of producing USD millionaires through the structured cash-out of their shares in the Compassionate Capitalism Economic System and strategic community investments.',
                tag: 'Exclusive Circle',
                tagClass: 'premium',
                color: '#ffeb3b'
            }
        };
    },

    getConclusion: () => {
        return {
            message: 'Through redirecting global commerce by implementing Compassionate Capitalism and its Investment Platform, we bring ownership, opportunity, and prosperity to the people — turning the earth into a kingdom of shared wealth, dignity, and purpose.',
            author: 'Created and Articulated by King Charles N. Lambert'
        };
    },

    getStats: () => {
        return [
            {
                number: '62,400+',
                label: 'Professionals Network',
                icon: 'fa fa-users'
            },
            {
                number: '28',
                label: 'Sectors Covered',
                icon: 'fa fa-th-large'
            },
            {
                number: '$300',
                label: 'Monthly Dividends',
                icon: 'fa fa-dollar'
            },
            {
                number: 'Global',
                label: 'Worldwide Reach',
                icon: 'fa fa-globe'
            }
        ];
    },

    getResourceLinks: () => {
        return [
            { title: 'Shareholder Guide', url: '/resources/shareholder-guide.pdf', icon: 'fa fa-file-pdf-o' },
            { title: '28 Apps Overview', url: '/resources/28-apps-overview.pdf', icon: 'fa fa-mobile' },
            { title: 'Dividend Structure', url: '/resources/dividend-structure.pdf', icon: 'fa fa-money' },
            { title: 'BWS Community Charter', url: '/resources/bws-charter.pdf', icon: 'fa fa-file-text-o' }
        ];
    },

    processInvestmentForm: (formData) => {
        // Handle any forms on the investment page (signup, newsletter, inquiry, etc.)
        const { email, name, phone, region, interest } = formData;
        
        if (!email) {
            return {
                success: false,
                message: 'Email is required'
            };
        }
        
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return {
                success: false,
                message: 'Please enter a valid email address'
            };
        }
        
        // Process subscription or inquiry
        console.log('Investment page form submission:', formData);
        
        return {
            success: true,
            message: 'Thank you for your interest in the Compassionate Capitalism Investments Platform! A representative will contact you shortly about becoming a 28 Apps Shareholder.'
        };
    }
};

module.exports = investmentService;