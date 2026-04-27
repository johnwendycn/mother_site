const express = require('express');
const router = express.Router();

console.log('Loading routes...');

// Define all routes
const routes = [
    { name: 'Home', path: '/', file: './home.route' },
    { name: 'About', path: '/about', file: './about.route' },
    { name: 'Features', path: '/features', file: './features.route' },
    { name: 'Advances', path: '/advances', file: './advances.route' },
    { name: 'Rankings', path: '/rankings', file: './rankings.route' },
    { name: 'Investment', path: '/investment', file: './investment.route' },
    { name: 'Mind', path: '/mind', file: './mind.route' },
    { name: 'Channels', path: '/channels', file: './channels.route' },
    { name: 'Terms', path: '/terms', file: './terms.route' },
    { name: 'UserTerms', path: '/user-terms', file: './user-terms.route' },
    { name: 'Contact', path: '/contact', file: './contact.route' }
];

// Load and mount each route
routes.forEach(({ name, path, file }) => {
    try {
        const route = require(file);
        if (route && typeof route === 'function' && route.stack) {
            router.use(path, route);
            console.log(`✓ ${name} route mounted at ${path || '/'}`);
        } else if (route && typeof route === 'object' && route.stack) {
            router.use(path, route);
            console.log(`✓ ${name} route mounted at ${path || '/'}`);
        } else {
            console.warn(`⚠ ${name} route file exists but is not a valid router`);
            console.log(`   Route type: ${typeof route}`);
        }
    } catch (err) {
        console.error(`✗ ${name} route error:`, err.message);
    }
});

console.log('✅ Router setup complete');
module.exports = router;