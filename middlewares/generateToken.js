import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    const token = jwt.sign(
        { email: req.body.email || req.user.email },
        process.env.SECRET,
        { expiresIn: 60*60*2 }
    )
    req.token = token
    return next()
}