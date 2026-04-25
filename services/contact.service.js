// services/contact.service.js

const contactService = {
    getContactData: () => {
        return {
            title: 'Contact Us - Black Wall Street',
            page: 'contact'
        };
    },

    getContactInfo: () => {
        return {
            address: '123 Wall Street, Business District',
            city: 'New York, NY 10001',
            phone: '+1 (555) 123-4567',
            email: 'info@blackwallstreet.com',
            hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
            social: {
                facebook: 'https://facebook.com/blackwallstreet',
                twitter: 'https://twitter.com/blackwallstreet',
                instagram: 'https://instagram.com/blackwallstreet',
                linkedin: 'https://linkedin.com/company/blackwallstreet'
            }
        };
    },

    processContactForm: (formData) => {
        // Validate required fields
        const { name, email, subject, message } = formData;
        
        if (!name || !email || !subject || !message) {
            return {
                success: false,
                message: 'All fields are required'
            };
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                success: false,
                message: 'Please enter a valid email address'
            };
        }
        
        // Here you would typically:
        // 1. Save to database
        // 2. Send email notification
        // 3. Trigger webhook, etc.
        
        console.log('Contact form submitted:', formData);
        
        // For demo purposes, return success
        return {
            success: true,
            message: 'Thank you for contacting us. We will get back to you soon!',
            data: formData
        };
    }
};

module.exports = contactService;