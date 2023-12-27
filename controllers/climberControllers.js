import Climber from '../models/Climber.js'

async function getClimbers(req,res,next){
    try {
        const allClimbers = await Climber.find()
        res.json({
            response: allClimbers
        })
        
    } catch (error) {
        
    }
}

export { getClimbers }