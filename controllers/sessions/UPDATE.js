import Session from '../../models/Session.js'

async function updateSession(req,res,next){
    const update = req.body
    const { id } = req.params
    try {
        const updatedSession = await Session.findOneAndUpdate({_id: id}, update, { new: true })
        res.json({
            response: updatedSession
        })
        
    } catch (error) {
        console.log(error);
    }
}

export { updateSession }