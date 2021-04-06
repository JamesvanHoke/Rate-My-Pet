const router = require('express').Router();

// Setup our overall router controls
const apiRoutes = require('./api');
// Require any other routes created

router.use('/api', apiRoutes);

// Create a / route

module.exports = router;
