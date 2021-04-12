const router = require('express').Router();
const { Pet, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// this is the / route

// Landing Page/Home Page
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

    const allpets = await Pet.findAll();
    const allpet = allpets.map((pet) => pet.get({ plain: true }));

    // Serialize data so the template can read it
    const rated_pet = recentlyRatedPet.map((ratedPet) =>
      ratedPet.get({ plain: true })
    );

    const created_pet = recentlyCreatedPet.map((createdPet) =>
      createdPet.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render('homepage', {
      rated_pet,
      created_pet,
      allpet,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gallery Page (allows users to go through the collection of pets that can be rated)
router.get('/gallery/:id', async (req, res) => {
  try {
    // Gets the pet by ID
    const petData = await Pet.findByPk(req.params.id);
    const soloPet = petData.get({ plain: true });

    // Gets the pets comments
    const commentData = await Comment.findAll({
      where: {
        pet_id: req.params.id,
      },
    });
    const soloPetComm = commentData.map((data) => data.toJSON());

    // sends the info
    // res.send(galleryData);
    res.render('solo', {
      soloPet,
      soloPetComm,
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

    // res.send(top5get);
    res.render('rankings', {
      top5get,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UploadPage
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
// Our catchall that sends people to homepage.
// router.get('*', (req, res) => {
//   try {
//     res.redirect('/');
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Pet }],
    });

    // const user = userData.map((user) => user.toJSON());
    const user = userData.get({ plain: true });

    // res.send(user);
    res.render('profile', { user, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
