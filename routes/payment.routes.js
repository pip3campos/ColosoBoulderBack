import { Router } from "express"
import { createOrder, statusOrder, refundOrder } from '../controllers/tbk.controller.js'
import passport from "../middlewares/passport.js"
import { createPayment } from "../controllers/payments/CREATE.js"
import { getPayments } from "../controllers/payments/READ.js"

const router = Router()

router.get("/create", createOrder)
router.post("/status", statusOrder)
router.post("/refund", refundOrder)
router.post("/store", createPayment)
router.get("/payments", getPayments)

export default router