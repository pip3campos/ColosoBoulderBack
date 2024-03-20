import express from'express'
import climbersRouter from './climbers.js'
import coachesRouter from './coaches.js'
import categoriesRouter from './categories.js'
import sessionsRouter from './sessions.js'
import paymentRouter from './payment.routes.js'

let router = express.Router();

router.get('/', function(req, res, next) {
  res.send('index')
});

router.use('/auth', climbersRouter)
router.use('/coaches', coachesRouter)
router.use('/categories', categoriesRouter)
router.use('/sessions', sessionsRouter)
router.use('/pay', paymentRouter)


export default router;
