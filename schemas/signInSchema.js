import joi from "joi"

const signInValidator = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
})

export default signInValidator