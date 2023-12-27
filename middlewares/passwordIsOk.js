import Climber from '../models/Climber.js'
import bcrypt from 'bcryptjs'

export default async function(req,res,next) {
    const climber = await Climber.findOne({ email: req.body.email })
    const db_pass = climber.password
    if (!req.body.password) {
        req.body.password = ''
    }
    const form_pass = req.body.password
    if (bcrypt.compareSync(form_pass,db_pass)) {
        return next()
    }
    return res.status(400).json({
        response: null, message: 'Invalid credentials!'
    })
}