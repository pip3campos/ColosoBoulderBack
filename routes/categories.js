import express from 'express'
import { getCategories } from '../controllers/categories/READ.js'
import passport from '../middlewares/passport.js';

const router = express.Router()

router.get('/', getCategories)

export default router