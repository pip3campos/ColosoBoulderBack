import { Router } from "express"
import { createOrder1, createOrder2, createOrder3, createOrder4, createOrder5, receiveWebhook } from '../controllers/payment.controller.js'
import passport from "../middlewares/passport.js"

const router = Router()

router.post( '/create-order1', passport.authenticate('jwt', {session: false}), createOrder1 )
router.post( '/create-order2', passport.authenticate('jwt', {session: false}), createOrder2 )
router.post( '/create-order3', passport.authenticate('jwt', {session: false}), createOrder3 )
router.post( '/create-order4', passport.authenticate('jwt', {session: false}), createOrder4 )
router.post( '/create-order5', passport.authenticate('jwt', {session: false}), createOrder5 )
router.get( '/success', (req,res) => res.send('success') )
router.get( '/failure', (req,res) => res.send('failure') )
router.get( '/pending', (req,res) => res.send('pending') )
router.post( '/webhook', receiveWebhook )

export default router