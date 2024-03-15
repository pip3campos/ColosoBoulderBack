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
    const { id } = req.query
    try {
        const coach = await Coach.findOne({ climber_id: id}).populate({path:'climber_id'})
        return res.status(200).json({
            success: true,
            response: coach,
            message: "Here's the coach"
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