const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Route is /api/comments

// Posts a comment.
router.post('/:id', withAuth, async (req, res) => {
  try {
    /*
    req.body must contain this
    {
        comment: "String"
    }
     */

    const newComment = await Comment.create({
      ...req.body,
      //Pulls the user id off the of the session ID
      commenter_id: req.session.user_id,
      //Pulls the pet's id off the req url sent and converts it into a number
      pet_id: parseInt(req.params.id),
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


// TODO: Future Dev implement a way to delete comments
// Deletes a comment.
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const petData = await Comment.destroy({
//       where: {
//         id: req.params.id,
//         commenter_id: req.session.user_id,
//       },
//     });

//     if (!petData) {
//       res.status(404).json({ message: 'No comment found with this id.' });
//       return;
//     }

//     res.status(200).json(petData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
