import passport from "./passport.js";

export default function(req,res,next) {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (info && info.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired'})
        }
        return next()
    })(req,res,next)
}