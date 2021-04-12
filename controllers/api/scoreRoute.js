const router = require('express').Router();
const { Pet } = require('../../models');
const withAuth = require('../../utils/auth');
//withAuth was taken out
router.get('/', (req, res) => {
  Pet.findAll().then((burrito) => {
    res.json(burrito);
  });
});
router.put('/inc/:id', (req, res) => {
  Pet.increment('pet_score', {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedBook) => {
      res.json(updatedBook);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.put('/dec/:id', (req, res) => {
  Pet.decrement('pet_score', {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedBook) => {
      res.json(updatedBook);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});


module.exports = router;
// when you click on the button for pet, its the route /api/scores/:id