import Session from '../../models/Session.js'

async function deleteSession(req,res,next){
    const {id} = req.params
    try {
        const deletedSession = await Session.findOneAndDelete({
            _id: id
        })
        res.json({
            response: deletedSession
        })
        
    } catch (error) {
        
    }
}

export { deleteSession }