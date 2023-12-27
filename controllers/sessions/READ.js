import Session from '../../models/Session.js'

async function getSessions(req,res,next){
    const { email } = req.query
    let queries = {}
    if (email) {
        queries.email = email
    }
    try {
        const allSessions = await Session.find(queries)
        res.json({
            response: allSessions
        })
        
    } catch (error) {
        
    }
}

export { getSessions }