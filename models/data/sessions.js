import Session from "../Session.js"
import Climber from "../Climber.js"
import 'dotenv/config.js'
import '../../config/db.js'

let sessions = [
    {
        date: "2023-12-21T18:30",
        duration: "1h30m",
        level:"adults",
        price: 1,
        wall: "north",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2023-12-23T11:15",
        duration: "1h30m",
        level:"kids",
        price: 1,
        wall: "north",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2023-12-25T18:30",
        duration: "2h",
        level:"adults",
        price: 1,
        wall: "north",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },{
        date: "2023-12-27T18:30",
        duration: "1h30m",
        level:"kids",
        price: 1,
        wall: "north",
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