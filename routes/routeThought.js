const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../controllers/thoughtsController.js');

const { createReaction, deleteReaction } = require('../controllers/reactionController.js')

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;
/*
1. read method : 

2. creating a single method:

3. creating many records:

4. updating a single record: 

5.  deleting a single record: 

*/