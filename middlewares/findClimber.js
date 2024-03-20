import Climber from '../models/Climber.js'

const findClimber = async (req, res, next) =>  {
    try {
        const climber = await Climber.findById( req.body.instructor_id )
        if (climber) {
            req.body.instructor_id = climber._id
            return next()
        }
        return res.status(404).json({
            success: false,
            message: "Escalador no encontrado",
            response: null
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            response: null
        })
    }
}

export default findClimber