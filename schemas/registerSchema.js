import joi from "joi"

const registerValidator = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
})

export default registerValidator