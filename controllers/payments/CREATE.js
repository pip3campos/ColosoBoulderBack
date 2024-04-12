import Payment from "../../models/Payment.js"

async function createPayment(req,res,next) {
    const {
        itemType,
        amount,
        user
    } = req.body
    try {
        const newPayment = await Payment.create({
            itemType,
            amount,
            user
        })
        return res.status(201).json({
            success: true,
            response: newPayment,
            message: "Payment created"
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

export { createPayment }