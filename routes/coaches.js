import express from 'express'
import { getCoaches, getCoach } from '../controllers/coaches/READ.js'
import { registerCoach } from '../controllers/coaches/CREATE.js'
import passport from '../middlewares/passport.js';

const router = express.Router()

router.get('/', getCoaches)
router.get('/me', passport.authenticate('jwt', { session: false }), getCoach)
router.post('/addcoach', registerCoach)

export default router