import Session from '../../models/Session.js'

async function createSession(req,res,next) {
    const {
        date,
        duration,
        level,
        price,
        wall,
        instructor_id,
        spots
    } = req.body
    try {
        const newSession = await Session.create({
            date,
            duration,
            level,
            price,
            wall,
            instructor_id,
            spots
        })
        return res.status(201).json({
            success: true,
            response: newSession,
            message: "Session created"
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

export { createSession }