import mercadopago from 'mercadopago'

export const createOrder1 = async (req,res) => {
    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Pase diario $3.500',
                unit_price: 3500,
                currency_id: 'CLP',
                quantity: 1
            }
        ],
        back_urls: {
            success: `${process.env.NGROK_LINK}/pagoonline`,
            failure: `${process.env.NGROK_LINK}/pagoonline`,
            pending: `${process.env.NGROK_LINK}/pagoonline`
        },
        notification_url: `${process.env.NGROK_LINK}/pay/webhook`
    })

    console.log(result)
    res.send(result.body)
}

export const createOrder2 = async (req,res) => {
    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Pack 8 pases mensuales $20.000',
                unit_price: 20000,
                currency_id: 'CLP',
                quantity: 1
            }
        ],
        back_urls: {
            success: `${process.env.NGROK_LINK}/pay/success`,
            failure: `${process.env.NGROK_LINK}/pay/failure`,
            pending: `${process.env.NGROK_LINK}/pay/pending`
        },
        notification_url: `${process.env.NGROK_LINK}/pay/webhook`
    })

    console.log(result)
    res.send(result.body)
}

export const createOrder3 = async (req,res) => {
    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Clase $6.000',
                unit_price: 6000,
                currency_id: 'CLP',
                quantity: 1
            }
        ],
        back_urls: {
            success: `${process.env.NGROK_LINK}/pay/success`,
            failure: `${process.env.NGROK_LINK}/pay/failure`,
            pending: `${process.env.NGROK_LINK}/pay/pending`
        },
        notification_url: `${process.env.NGROK_LINK}/pay/webhook`
    })

    console.log(result)
    res.send(result.body)
}

export const createOrder4 = async (req,res) => {
    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Clases adulto + 4 pases $30.000',
                unit_price: 30000,
                currency_id: 'CLP',
                quantity: 1
            }
        ],
        back_urls: {
            success: `${process.env.NGROK_LINK}/pay/success`,
            failure: `${process.env.NGROK_LINK}/pay/failure`,
            pending: `${process.env.NGROK_LINK}/pay/pending`
        },
        notification_url: `${process.env.NGROK_LINK}/pay/webhook`
    })

    console.log(result)
    res.send(result.body)
}

export const createOrder5 = async (req,res) => {
    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Clases juveniles $27.000',
                unit_price: 27000,
                currency_id: 'CLP',
                quantity: 1
            }
        ],
        back_urls: {
            success: `${process.env.NGROK_LINK}/pay/success`,
            failure: `${process.env.NGROK_LINK}/pay/failure`,
            pending: `${process.env.NGROK_LINK}/pay/pending`
        },
        notification_url: `${process.env.NGROK_LINK}/pay/webhook`
    })

    console.log(result)
    res.send(result.body)
}

export const receiveWebhook = async (req,res) => {
    console.log(req.query)
    try {
        if (req.query.type == 'payment') {
            const data = await mercadopago.payment.findById(req.query['data.id'])
            console.log(data)
            //store in DB
        }
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500).json({ error : error.message })
    }
}