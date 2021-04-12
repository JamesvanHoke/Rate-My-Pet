const router = require('express').Router();
const { Pet } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/', withAuth, async (req, res) => {
  try {
    const updateScore = await Pet.update(req.body, {
      where: {
        id: req.body.id,
      },
    });
    res.json(updateScore);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;