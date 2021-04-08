const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const petRoutes = require('./petRoutes');
const userRoutes = require('./userRoutes');

// Set up your path using the router middleware.
router.use('/comments', commentRoutes);
router.use('/pets', petRoutes);
router.use('/users', userRoutes);

module.exports = router;
