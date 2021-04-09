// TODO: Setup Res.render routes

const router = require('express').Router();
const { Pet } = require('../models');
// const withAuth = require('../utils/auth');

// this is the / route

// Our catchall that sends people to homepage.
router.get('*', (req, res) => {
  try {
    res.redirect('/');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Landing Page
router.get('/', async (req, res) => {
  try {
    // Most recent updated/created Pet
    const recentlyRatedPet = await Pet.findAll({
      order: [['updatedAt', 'DESC']],
      limit: 1,
    });
    const recentlyCreatedPet = await Pet.findAll({
      order: [['createdAt', 'DESC']],
      limit: 1,
    });

    // Serialize data so the template can read it
    const recRatedPet = recentlyRatedPet.map((pet) => pet.get({ plain: true }));
    const recCreatedPet = recentlyCreatedPet.map((pet) =>
      pet.get({ plain: true })
    );

    // Put our pages data into an array
    const landingPageData = [recRatedPet, recCreatedPet];

    // Pass serialized data and session flag into template
    res.render('homepage', {
      landingPageData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gallery Page (allows users to go through the collection of pets that can be rated)
router.get('/gallery/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {});

    const soloPet = petData.get({ plain: true });

    res.render('solo', {
      ...soloPet,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.status(200).render('login');
});

// Top Ranking Page
router.get('/ranking', async (req, res) => {
  try {
    const top5 = await Pet.findAll({
      order: [['pet_score', 'DESC']],
      limit: 5,
    });

    const top5get = top5.map((data) => data.get({ plain: true }));

    res.render('rankings', {
      top5get,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/upload', (req, res) => {
  try {
    res.render('uploads', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Unneeded? <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Pet }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
