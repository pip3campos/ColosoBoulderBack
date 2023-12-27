import Climber from '../models/Climber.js'

export default async function(req,res,next) {
    const climber = await Climber.findOne({ email: req.body.email })
    if (!climber) {
        return res.status(404).json({
            success: false,
            message: 'User not found!'
        })
    }
    return next()
}