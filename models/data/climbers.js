import Climber from "../Climber.js"
import 'dotenv/config.js'
import '../../config/db.js'

let climbers = [{
    email: "alan@gmail.com",
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    name:"Alan",
    role: 1,
    online: false,
    verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
},{
    email: "martin@gmail.com",
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    name:"Martín",
    role: 1,
    online: false,
    verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
},{
    email: "francisco@gmail.com",
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    online: false,
    verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
},{
    email: "paola@gmail.com",
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    online: false,
    verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
},{
    email: "barbara@gmail.com",
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    online: false,
    verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
}]

Climber.insertMany(climbers)
//el método requiere un array con los datos a insertar en mongo