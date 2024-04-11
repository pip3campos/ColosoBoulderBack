import express from 'express';
import { getClimbers, getClimber } from '../controllers/climbers/READ.js';
import { registerClimber } from '../controllers/climbers/CREATE.js';
import { signInClimber, signOutClimber } from '../controllers/climbers/UPDATE.js';
import { deleteClimber } from '../controllers/climbers/DELETE.js';
import verifyAccount from "../controllers/climbers/verifyAccount.js";
import validator from './../middlewares/validator.js'
import registerValidator from '../schemas/registerSchema.js';
import accountExists from '../middlewares/accountExists.js';
import createHash from '../middlewares/createHash.js';
import accountNotExists from '../middlewares/accountNotExists.js';
import passwordIsOk from '../middlewares/passwordIsOk.js';
import generateToken from '../middlewares/generateToken.js';
import signInValidator from '../schemas/signInSchema.js';
import passport from '../middlewares/passport.js';
import tokenHasExpired from '../middlewares/tokenHasExpired.js';

let router = express.Router();

router.get('/', getClimbers);
router.get('/me', getClimber);
router.post('/register', validator(registerValidator), accountExists, createHash, registerClimber);
router.put('/signin', validator(signInValidator), accountNotExists, passwordIsOk, generateToken, signInClimber);
router.put('/signout', tokenHasExpired, passport.authenticate('jwt', { session: false }), signOutClimber);
router.put("/verify/:verify_code", verifyAccount)
router.delete('/:id', deleteClimber);

export default router;
