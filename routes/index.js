const router = require('express').Router();
const thoughtsRouter = require('./routeThought')
// const reactionsRouter = require('./routeReaction')
const usersRouter = require('./routeUser')

router.use('/thoughts', thoughtsRouter)
// router.use('/reactions', reactionsRouter)
router.use('/users', usersRouter)

module.exports = router