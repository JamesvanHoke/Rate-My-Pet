const router = require('express').Router();

// ApiRoutes
const commentRoutes = require('./commentRoutes');
const petRoutes = require('./petRoutes');
const userRoutes = require('./userRoutes');
const scoreRoutes = require('./scoreRoute')

// Sets up middleware to adjust the routes
router.use('/comments', commentRoutes);
router.use('/pets', petRoutes);
router.use('/users', userRoutes);
router.use('/scores', scoreRoutes);

module.exports = router;
