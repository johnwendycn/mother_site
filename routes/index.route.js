const express = require('express');
const router = express.Router();

console.log('Loading routes...');

// Test each route individually
let homeRoute, aboutRoute, featuresRoute, advancesRoute, rankingsRoute, investmentRoute, mindRoute, channelsRoute;

try {
    homeRoute = require('./home.route');
    console.log('✓ Home route loaded, type:', typeof homeRoute);
} catch (err) {
    console.error('✗ Home route error:', err.message);
}

try {
    aboutRoute = require('./about.route');
    console.log('✓ About route loaded, type:', typeof aboutRoute);
} catch (err) {
    console.error('✗ About route error:', err.message);
}

try {
    featuresRoute = require('./features.route');
    console.log('✓ Features route loaded, type:', typeof featuresRoute);
} catch (err) {
    console.error('✗ Features route error:', err.message);
}

try {
    advancesRoute = require('./advances.route');
    console.log('✓ Advances route loaded, type:', typeof advancesRoute);
} catch (err) {
    console.error('✗ Advances route error:', err.message);
}

try {
    rankingsRoute = require('./rankings.route');
    console.log('✓ Rankings route loaded, type:', typeof rankingsRoute);
} catch (err) {
    console.error('✗ Rankings route error:', err.message);
}

try {
    investmentRoute = require('./investment.route');
    console.log('✓ Investment route loaded, type:', typeof investmentRoute);
} catch (err) {
    console.error('✗ Investment route error:', err.message);
}

try {
    mindRoute = require('./mind.route');
    console.log('✓ Mind route loaded, type:', typeof mindRoute);
} catch (err) {
    console.error('✗ Mind route error:', err.message);
}

try {
    channelsRoute = require('./channels.route');
    console.log('✓ Channels route loaded, type:', typeof channelsRoute);
} catch (err) {
    console.error('✗ Channels route error:', err.message);
}

// Mount only valid routes
if (homeRoute && typeof homeRoute === 'function') router.use('/', homeRoute);
if (aboutRoute && typeof aboutRoute === 'function') router.use('/about', aboutRoute);
if (featuresRoute && typeof featuresRoute === 'function') router.use('/features', featuresRoute);
if (advancesRoute && typeof advancesRoute === 'function') router.use('/advances', advancesRoute);
if (rankingsRoute && typeof rankingsRoute === 'function') router.use('/rankings', rankingsRoute);
if (investmentRoute && typeof investmentRoute === 'function') router.use('/investment', investmentRoute);
if (mindRoute && typeof mindRoute === 'function') router.use('/mind', mindRoute);
if (channelsRoute && typeof channelsRoute === 'function') router.use('/channels', channelsRoute);

console.log('✅ Router setup complete');
module.exports = router;