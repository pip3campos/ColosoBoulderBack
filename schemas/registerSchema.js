import joi from "joi"

const registerValidator = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
    phone: joi.string().required(),
    photo: joi.string().required()
})

export default registerValidator