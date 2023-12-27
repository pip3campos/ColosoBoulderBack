import Climber from '../../models/Climber.js'

async function deleteClimber(req,res,next){
    const {id} = req.params
    try {
        const deletedClimber = await Climber.findOneAndDelete({
            _id: id
        })
        res.json({
            response: deletedClimber
        })
        
    } catch (error) {
        
    }
}

export { deleteClimber }