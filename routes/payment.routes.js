import { Router } from "express"
import { createOrder, statusOrder, refundOrder } from '../controllers/tbk.controller.js'
import passport from "../middlewares/passport.js"

const router = Router()

router.get("/create", createOrder)
router.post("/status", statusOrder)
router.post("/refund", refundOrder)

export default router