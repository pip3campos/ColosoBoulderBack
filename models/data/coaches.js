import 'dotenv/config.js'
import '../../config/db.js'
import Coach from "../Coach.js"
import Climber from "../Climber.js"

let coaches = [{
    fullName: "Alan Silva",
    climber_id: 'alan@gmail.com',
    active: true,
},{
    fullName: "Martin Vargas",
    climber_id: "martin@gmail.com",
    active: true,
}]

//necesito un loop para buscar el id de cada usuario en base al correo electronico

coaches.forEach(coach=>add_coaches(coach))

async function add_coaches(coach) {
    //console.log(coach.user_id)
    let climber = await Climber.findOne({ email:coach.climber_id })     //esperé que mongo me busque un usuario que coincida con el email guardado en la propiedad climber_id
    //console.log(climber._id)
    let climber_id = climber._id                                      //guardo la propiedad _id del usuario encontrado en una variable
    coach.climber_id = climber_id                                    //reasigno la propiedad del user_id del coach por el objectid encontrado
    await Coach.create(coach)                                 //el método create, crea un unico documento con el objeto de datos (author)
}