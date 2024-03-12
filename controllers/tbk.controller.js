import pkg from 'transbank-sdk'
const { WebpayPlus } = pkg;
const { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } = pkg

export const createOrder = async (req,res) => {
    const {
        buyOrder,
        sessionId,
        amount,
        returnUrl
    } = req.query
    const tx = await (new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration)))
    const response = await tx.create(
        buyOrder,
        sessionId,
        amount,
        returnUrl
    )
    res.send(response)
}

export const commitOrder = async (req,res) => {
    const tx = await (new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration)))
    console.log(tx)
    const response = await tx.commit(req.body.token)
    console.log(response)
}

export const statusOrder = async (req,res) => {
    const tx = await (new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration)))
    console.log(tx)
    const response = await tx.status(req.body.token)
    console.log(response)
}

export const refundOrder = async (req,res) => {
    const tx = await (new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration)))
    console.log(tx)
    const response = await tx.refund(token, amount)
    console.log(response)
}