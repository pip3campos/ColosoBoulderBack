import Session from '../../models/Session.js'
import Category from '../../models/Category.js'

async function getSessions(req,res,next){
    const { email } = req.query
    let queries = {}
    if (email) {
        queries.email = email
    }
    try {
        const allSessions = await Session.find(queries).populate({path:'category_id'})
        return res.status(200).json({
            success: true,
            response: allSessions,
            message: "Here are all the sessiones created"
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

async function getSession(req,res,next){
    const { id } = req.params
    try {
        const session = await Session.findById(id).populate('category_id')
        return res.status(200).json({
            success: true,
            response: session,
            message: `Here is the session finded by the id: ${id}`
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

export { getSessions, getSession }