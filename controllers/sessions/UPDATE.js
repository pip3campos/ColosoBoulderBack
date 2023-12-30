import Session from '../../models/Session.js'

async function updateSession(req,res,next){
    const update = req.body
    const { id } = req.params
    try {
        const updatedSession = await Session.findOneAndUpdate({_id: id}, update, { new: true })
        return res.status(200).json({
            success: true,
            response: updatedSession,
            message: "Session updated successfully"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

export { updateSession }