import Climber from '../../models/Climber.js'

async function registerClimber(req,res,next){
    let {
        email,
        password,
        phone,
        photo
    } = req.body
    try {
        const newClimber = await Climber.create({
            email,
            password,
            phone,
            photo
        })
        return res.status(201).json({
            success: true,
            response: newClimber,
            message: "Climber profile created"
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

export { registerClimber }