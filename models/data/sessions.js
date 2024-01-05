import Session from "../Session.js"
import Climber from "../Climber.js"
import Category from "../Category.js"
import 'dotenv/config.js'
import '../../config/db.js'

let sessions = [
    {
        date: "2024-01-01T16:00",
        duration: 135,
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-01T19:30",
        duration: 120,
        category_id:"adultos nivel iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-02T16:00",
        duration: 135,
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-02T18:30",
        duration: 90,
        category_id:"juveniles grupo 2",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-02T20:15",
        duration: 105,
        category_id:"adultos nivel avanzado",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-03T18:30",
        duration: 90,
        category_id:"juveniles grupo 1",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-03T20:15",
        duration: 105,
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-04T16:00",
        duration: 135,
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-04T19:30",
        duration: 120,
        category_id:"adultos nivel iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-05T16:00",
        duration: 135,
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-05T18:30",
        duration: 90,
        category_id:"juveniles grupo 2",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-05T20:15",
        duration: 105,
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-06T11:30",
        duration: 105,
        category_id:"juveniles grupo 1",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-06T16:00",
        duration: 120,
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2024-01-06T18:15",
        duration: 105,
        category_id:"adultos nivel avanzado",
        instructor_id: "alan@gmail.com",
        spots: 25,
    }
]

async function add_session(session) {
    let climber = await Climber.findOne({ email:session.instructor_id })
    let instructor_id = climber._id
    session.instructor_id = instructor_id
    let category = await Category.findOne({ name:session.category_id })
    let category_id = category._id
    session.category_id = category_id
    await Session.create(session)
}

sessions.forEach(session=>add_session(session))