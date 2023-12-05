const router = require('express').Router();
const thoughtsRouter = require('./routeThought')
const reactionsRouter = require('./routeReaction')

router.use('/thoughts', thoughtsRouter)
router.use('/reactions', reactionsRouter)

module.exports = router