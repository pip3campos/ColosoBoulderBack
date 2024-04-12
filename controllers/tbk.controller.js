import pkg from 'transbank-sdk'
const { WebpayPlus } = pkg;
const { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } = pkg

async function createOrder (req,res,next) {
    const {
        buyOrder,
        sessionId,
        amount,
        returnUrl
    } = req.query
    try {
        const tx = await (new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration)))
        const response = await tx.create(
            buyOrder,
            sessionId,
            amount,
            returnUrl
        )
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

async function statusOrder (req,res,next) {
    const { token } = req.query
    try {
        const tx = await (new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration)))
        const response = await tx.status(token)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

async function refundOrder (req,res,next) {
    const { token } = req.query
    try {
        const tx = await (new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration)))
        const response = await tx.refund(token, amount)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

export { createOrder, statusOrder, refundOrder }