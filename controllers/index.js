const router = require('express').Router();

// Setup our overall router controls
const apiRoutes = require('./api');
const homeRoutes= require('./homeRoutes')
// Require any other routes created

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
