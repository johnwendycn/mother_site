// services/about.service.js

const aboutService = {
    getAboutData: () => {
        return {
            title: 'About Us - Black Wall Street',
            page: 'about'
        };
    },

    getMission: () => {
        return {
            title: 'Our Mission',
            description: 'To empower Black communities and the global diaspora through economic education, wealth-building opportunities, and sustainable financial ecosystems that create lasting generational wealth.',
            vision: 'A world where every community has equal access to capital, resources, and opportunities for economic prosperity.'
        };
    },

    getValues: () => {
        return [
            {
                icon: 'fa fa-handshake-o',
                title: 'Unity',
                description: 'Building strong communities through collaboration and collective action.'
            },
            {
                icon: 'fa fa-diamond',
                title: 'Excellence',
                description: 'Striving for the highest standards in everything we do.'
            },
            {
                icon: 'fa fa-lightbulb-o',
                title: 'Innovation',
                description: 'Embracing new technologies and creative solutions for economic growth.'
            },
            {
                icon: 'fa fa-heart',
                title: 'Compassion',
                description: 'Putting people first and ensuring prosperity for all members.'
            },
            {
                icon: 'fa fa-shield',
                title: 'Integrity',
                description: 'Operating with transparency, honesty, and ethical practices.'
            },
            {
                icon: 'fa fa-line-chart',
                title: 'Growth',
                description: 'Continuous improvement and expansion of opportunities.'
            }
        ];
    },

    getTeam: () => {
        return [
            {
                name: 'Dr. Michael Johnson',
                position: 'Founder & CEO',
                bio: 'Visionary leader with 20+ years in economic development',
                image: 'img/team/team1.jpg',
                social: {
                    linkedin: '#',
                    twitter: '#'
                }
            },
            {
                name: 'Sarah Williams',
                position: 'Director of Operations',
                bio: 'Expert in community organizing and program management',
                image: 'img/team/team2.jpg',
                social: {
                    linkedin: '#',
                    twitter: '#'
                }
            },
            {
                name: 'David Thompson',
                position: 'Financial Education Lead',
                bio: 'Certified financial planner and wealth building specialist',
                image: 'img/team/team3.jpg',
                social: {
                    linkedin: '#',
                    twitter: '#'
                }
            },
            {
                name: 'Dr. Amina Olatunji',
                position: 'Head of African Initiatives',
                bio: 'Economic development expert focusing on African markets',
                image: 'img/team/team4.jpg',
                social: {
                    linkedin: '#',
                    twitter: '#'
                }
            }
        ];
    },

    getStats: () => {
        return [
            {
                number: '50K+',
                label: 'Community Members',
                icon: 'fa fa-users'
            },
            {
                number: '$10M+',
                label: 'Wealth Generated',
                icon: 'fa fa-dollar'
            },
            {
                number: '25+',
                label: 'Partner Organizations',
                icon: 'fa fa-building'
            },
            {
                number: '15+',
                label: 'Countries Reached',
                icon: 'fa fa-globe'
            }
        ];
    },

    getHistory: () => {
        return {
            founding: '2020',
            overview: 'Black Wall Street was founded to revive the spirit of economic independence and collective prosperity that defined the original Black Wall Street in Tulsa, Oklahoma. Our modern initiative focuses on creating sustainable wealth through education, investment, and community support.',
            milestones: [
                { year: '2020', event: 'Foundation established in Lagos, Nigeria' },
                { year: '2021', event: 'Launched financial education programs across 5 countries' },
                { year: '2022', event: 'Reached 10,000 community members milestone' },
                { year: '2023', event: 'Expanded to North American and European markets' },
                { year: '2024', event: 'Launched Compassionate Capitalism initiative' }
            ]
        };
    },

    processAboutForm: (formData) => {
        // Handle any forms on the about page (newsletter signup, contact, etc.)
        const { email, name, message } = formData;
        
        if (!email) {
            return {
                success: false,
                message: 'Email is required'
            };
        }
        
        // Process subscription or inquiry
        console.log('About page form submission:', formData);
        
        return {
            success: true,
            message: 'Thank you for your interest! We will contact you soon.'
        };
    }
};

module.exports = aboutService;