import Payment from "../../models/Payment.js"

async function getPayments(req,res,next){
    const { user } = req.query
    let queries = user ? user : null
    try {
        const payments = await Payment.find(queries).populate('user')
        if (payments && queries) {
            return res.status(200).json({
                success: true,
                response: payments,
                message: `Here are all the payments made by the user with ID ${user}`
            })
        } else if (payments) {
            return res.status(200).json({
                success: true,
                response: payments,
                message: 'Here are all the payments ever made'
            })
        } else {
            return res.status(404).json({
                success: true,
                response: payments,
                message: 'There are no payments made yet'
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

export { getPayments }