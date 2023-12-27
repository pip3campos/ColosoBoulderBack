import express from 'express'
import { getCoaches } from '../controllers/coaches/READ.js';
import { createCoach } from '../controllers/coaches/CREATE.js';
import { updateCoach } from '../controllers/coaches/UPDATE.js';
import { deleteCoach } from '../controllers/coaches/DELETE.js';

const router = express.Router()

router.get('/', getCoaches);
router.post('/', createCoach);
router.put('/:id', updateCoach);
router.delete('/:id', deleteCoach);

export default router