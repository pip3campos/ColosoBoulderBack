import bcrypt from 'bcryptjs'

export default (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    return next()
    }