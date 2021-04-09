const router = require('express').Router();
const { Pet } = require('../../models');
// const withAuth = require('../../utils/auth');

// TODO: READD WITHAUTH
// Route is /api/pets

// Allows users to upload a pet
router.post('/', async (req, res) => {
  try {
    /*
    req.body needs to contain this
    {
        "pet_name": "string",
        "Pet_description": "string",
        "pet_image": "string",
        "owner_name": "string"
        "owner_id": "integer"
    }
     */
    const newPet = await Pet.create({
      ...req.body,
    });

    res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Allows users to delete a pet
router.delete('/:id', async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
        owner_id: req.session.user_id,
      },
    });

    if (!petData) {
      res.status(404).json({ message: 'No pet that you own was found with this id!' });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
