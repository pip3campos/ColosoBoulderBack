import Climber from '../models/Climber.js'
import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export default passport.use(new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET
        },
        async (jwt_payload,done) => {
            try {
                let climber = await Climber.findOne({email:jwt_payload.email}).select("-password")
                if (climber) {
                    return done(null, climber)
                } else {
                    console.log("aquí me caí");
                    throw new Error("Climber doesn't exist")
                }
            } catch (error) {
                console.log(error)
                return done(error)
            }
    }))