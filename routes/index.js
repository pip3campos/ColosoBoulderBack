import express from'express';
import climbersRouter from './climbers.js';
import sessionsRouter from './sessions.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/climbers', climbersRouter);
router.use('/sessions', sessionsRouter);

export default router;
