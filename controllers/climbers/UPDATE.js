import Climber from '../../models/Climber.js'

async function signInClimber(req,res,next){
    let {
        email,
    } = req.body
    try {
        const climber = await Climber.findOneAndUpdate({ email: email }, { online:true }, { new:true }).select("-password")
        return res.status(200).json({
            success: true,
            response: { token: req.token, climber},
            message: "Sign in successful"
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

async function signOutClimber(req,res,next){
    try {
        const email = req.user.email
        await Climber.findOneAndUpdate({ email: email }, { online:false }, { new:true })
        res.status(200).json({
            success: true,
            message: "Sign out successful"
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

export { signInClimber, signOutClimber }