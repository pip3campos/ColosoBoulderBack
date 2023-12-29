import Climber from '../../models/Climber.js'

async function getClimbers(req,res,next){
    const { email } = req.query
    let queries = {}
    if (email) {
        queries.email = email
    }
    try {
        const allClimbers = await Climber.find(queries)
        return res.status(200).json({
            success: true,
            response: allClimbers,
            message: "Here are all the climbers registered"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

async function getClimber(req,res,next){
    const { id } = req.user
    try {
        const climber = await Climber.findById(id).select("-password -verify_code -verified -__v")
        return res.status(200).json({
            success: true,
            response: climber,
            message: "Here's the climber logged in"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

export { getClimbers, getClimber }