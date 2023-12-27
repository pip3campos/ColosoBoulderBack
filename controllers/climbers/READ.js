import Climber from '../../models/Climber.js'

async function getClimbers(req,res,next){
    const { email } = req.query
    let queries = {}
    if (email) {
        queries.email = email
    }
    try {
        const allClimbers = await Climber.find(queries)
        res.json({
            response: allClimbers
        })
        
    } catch (error) {
        
    }
}

export { getClimbers }