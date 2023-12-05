const router = require('express').Router();
const {
  getReactions,
  getSingleReaction,
  createReaction,
  updateReaction,
  deleteReaction,
} = require('../controllers/reactionController.js');

// /api/Reactions
router.route('/').get(getReactions).post(createReaction);

// /api/Reactions/:ReactionId
router
  .route('/:reactionId')
  .get(getSingleReaction)
  .put(updateReaction)
  .delete(deleteReaction);

module.exports = router;