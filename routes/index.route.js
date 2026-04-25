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
    { name: 'Contact', path: '/contact', file: './contact.route' }
];

// Load and mount each route
routes.forEach(({ name, path, file }) => {
    try {
        const route = require(file);
        if (route && route.stack) {
            router.use(path, route);
            console.log(`✓ ${name} route mounted at ${path || '/'}`);
        } else {
            console.warn(`⚠ ${name} route file exists but is not a valid router`);
        }
    } catch (err) {
        console.error(`✗ ${name} route error:`, err.message);
    }
});

console.log('✅ Router setup complete');
module.exports = router;