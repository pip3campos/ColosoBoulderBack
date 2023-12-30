import Coach from '../../models/Coach.js'

async function registerCoach(req,res,next){
    let {
        name,
        climber_id
    } = req.body
    try {
        const newCoach = await Coach.create({
            name,
            climber_id
        })
        return res.status(201).json({
            success: true,
            response: newCoach,
            message: "Coach profile added"
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

export { registerCoach }