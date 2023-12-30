import Coach from '../../models/Coach.js'

async function getCoaches(req,res,next){
    try {
        const allCoaches = await Coach.find()
        return res.status(200).json({
            success: true,
            response: allCoaches,
            message: "Here are all the coaches added"
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

async function getCoach(req,res,next){
    const { _id } = req.user
    try {
        const coach = await Coach.find({ climber_id: _id})
        return res.status(200).json({
            success: true,
            response: coach,
            message: "Here's the coach logged in"
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

export { getCoaches, getCoach}