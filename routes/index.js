import express from'express'
import climbersRouter from './climbers.js'
import coachesRouter from './coaches.js'
import sessionsRouter from './sessions.js'

let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth', climbersRouter);
router.use('/coaches', coachesRouter);
router.use('/sessions', sessionsRouter);

export default router;
