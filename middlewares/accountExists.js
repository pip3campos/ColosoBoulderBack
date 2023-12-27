import Climber from '../models/Climber.js'

export default async function(req,res,next) {
    const climber = await Climber.findOne({ email: req.body.email })
    if (climber) {
        return res.status(400).json({
            success: false,
            message: 'User registered!'
        })
    }
    return next()
}