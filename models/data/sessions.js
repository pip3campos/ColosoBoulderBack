import Session from "../Session.js"
import Climber from "../Climber.js"
import 'dotenv/config.js'
import '../../config/db.js'

let sessions = [
    {
        date: "2024-01-01T16:00",
        duration: 135,
        category:"muro libre",
        level: "libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-01T19:30",
        duration: 120,
        category:"adultos",
        level: "iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-02T16:00",
        duration: 135,
        category:"muro libre",
        level: "libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-02T18:30",
        duration: 90,
        category:"juveniles grupo 2",
        level: "niños",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-02T20:15",
        duration: 105,
        category:"adultos",
        level: "avanzado",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-03T18:30",
        duration: 90,
        category:"juveniles grupo 1",
        level: "niños",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-03T20:15",
        duration: 105,
        category:"muro libre",
        level: "libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-04T16:00",
        duration: 135,
        category:"muro libre",
        level: "libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-04T19:30",
        duration: 120,
        category:"adultos",
        level: "iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-05T16:00",
        duration: 135,
        category:"muro libre",
        level: "libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-05T18:30",
        duration: 90,
        category:"juveniles grupo 2",
        level: "niños",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-05T20:15",
        duration: 105,
        category:"muro libre",
        level: "libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-06T11:30",
        duration: 105,
        category:"juveniles grupo 1",
        level: "niños",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-06T16:00",
        duration: 120,
        category:"muro libre",
        level: "libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-06T18:15",
        duration: 105,
        category:"adultos",
        level: "avanzado",
        instructor_id: "alan@gmail.com",
        spots: 25,
    }
]

async function add_session(session) {
    let climber = await Climber.findOne({ email:session.instructor_id })
    let instructor_id = climber._id
    session.instructor_id = instructor_id
    await Session.create(session)
}

sessions.forEach(session=>add_session(session))