import express from 'express'
import { getSessions } from '../controllers/sessions/READ.js';
import { createSession } from '../controllers/sessions/CREATE.js';
import { updateSession } from '../controllers/sessions/UPDATE.js';
import { deleteSession } from '../controllers/sessions/DELETE.js';
import findClimber from '../middlewares/findClimber.js';

const router = express.Router()

router.get('/', getSessions);
router.post('/', findClimber, createSession);
router.put('/:id', updateSession);
router.delete('/:id', deleteSession);

export default router