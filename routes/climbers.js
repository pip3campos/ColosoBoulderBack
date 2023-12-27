import express from 'express';
import { getClimbers } from '../controllers/climbers/READ.js';
import { registerClimber } from '../controllers/climbers/CREATE.js';
import { signInClimber } from '../controllers/climbers/UPDATE.js';
import { deleteClimber } from '../controllers/climbers/DELETE.js';
import validator from './../middlewares/validator.js'
import registerValidator from '../schemas/registerSchema.js';
import accountExists from '../middlewares/accountExists.js';
import createHash from '../middlewares/createHash.js';
import accountNotExists from '../middlewares/accountNotExists.js';
import passwordIsOk from '../middlewares/passwordIsOk.js';
import generateToken from '../middlewares/generateToken.js';

let router = express.Router();

/* GET users listing. */
router.get('/', getClimbers);
router.post('/register', validator(registerValidator), accountExists, createHash, registerClimber);
router.put('/signin', accountNotExists, passwordIsOk, generateToken, signInClimber);
router.delete('/:id', deleteClimber);

export default router;
