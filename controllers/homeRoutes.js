// TODO: Setup Res.render routes

const router = require('express').Router();
const { Pet, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

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

router.get('/Pet/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
