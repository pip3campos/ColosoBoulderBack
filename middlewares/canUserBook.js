import Climber from '../models/Climber.js'

const canUserBook = async (req, res, next) => {
    const n = req.body.registrationList.length - 1
    const {registrationList, category} = req.body
    const user = registrationList[n]
    delete req.body.category
    try {
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "There's no user to find",
                response: null
            })
        } else {
            const climber = await Climber.findById(user).select("-password -verify_code -__v")
            if (climber) {
                if (category == "muro libre") {
                    if (climber.dailyPass > 0) {
                        climber.dailyPass--
                        await climber.save()
                        return next()
                    } else {
                        return res.status(402).json({
                            success: false,
                            message: "Payment Required (dailyPass)",
                            response: null
                        })
                    }
                } else {
                    if (climber.lessons > 0) {
                        climber.lessons--
                        await climber.save()
                        return next()
                    } else {
                        return res.status(402).json({
                            success: false,
                            message: "Payment Required (lessons)",
                            response: null
                        })
                    }
                }
            } else {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                    response: null
                })
            }
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            response: null
        })
    }
}

export default canUserBook