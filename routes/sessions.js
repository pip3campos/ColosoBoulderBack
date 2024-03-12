import express from 'express'
import { getSessions, getSession } from '../controllers/sessions/READ.js';
import { createSession } from '../controllers/sessions/CREATE.js';
import { updateSession } from '../controllers/sessions/UPDATE.js';
import { deleteSession } from '../controllers/sessions/DELETE.js';
import findClimber from '../middlewares/findClimber.js';
import passport from '../middlewares/passport.js';

const router = express.Router()

router.get('/', getSessions);
router.get('/:id', getSession);
router.post('/', findClimber, createSession);
router.put('/:id', passport.authenticate('jwt', { session: false }), updateSession);
router.delete('/:id', deleteSession);

export default router