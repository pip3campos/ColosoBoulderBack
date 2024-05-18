import express from 'express'
import { getSessions, getSession } from '../controllers/sessions/READ.js';
import { createSession } from '../controllers/sessions/CREATE.js';
import { updateSession } from '../controllers/sessions/UPDATE.js';
import { deleteSession } from '../controllers/sessions/DELETE.js';
import findClimber from '../middlewares/findClimber.js';
import passport from '../middlewares/passport.js';
import findCategory from "../middlewares/findCategory.js"
import tokenHasExpired from '../middlewares/tokenHasExpired.js';
import canUserBook from '../middlewares/canUserBook.js';

const router = express.Router()

router.get('/', getSessions);
router.get('/:id', getSession);
router.post('/', findCategory, createSession);
router.put('/:id', tokenHasExpired, passport.authenticate('jwt', { session: false }), canUserBook, updateSession);
router.delete('/:id', deleteSession);

export default router