import Session from "../Session.js"
import Climber from "../Climber.js"
import Category from "../Category.js"
import 'dotenv/config.js'
import '../../config/db.js'

let sessions = [
    {
        startDate: "2024-02-01T19:30",
        endDate: "2024-02-01T21:30",
        category_id:"adultos nivel iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-02T18:30",
        endDate: "2024-02-02T20:00",
        category_id:"juveniles grupo 2",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-02T20:15",
        endDate: "2024-02-02T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-03T11:30",
        endDate: "2024-02-03T13:15",
        category_id:"juveniles grupo 1",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-03T17:00",
        endDate: "2024-02-03T21:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-05T19:30",
        endDate: "2024-02-05T21:30",
        category_id:"adultos nivel iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-06T18:30",
        endDate: "2024-02-06T20:00",
        category_id:"juveniles grupo 2",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-06T20:15",
        endDate: "2024-02-06T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-07T18:30",
        endDate: "2024-02-07T20:00",
        category_id:"juveniles grupo 1",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-07T20:15",
        endDate: "2024-02-07T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-08T19:30",
        endDate: "2024-02-08T21:30",
        category_id:"adultos nivel iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-09T18:30",
        endDate: "2024-02-09T20:00",
        category_id:"juveniles grupo 2",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-09T20:15",
        endDate: "2024-02-09T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-10T11:30",
        endDate: "2024-02-10T13:15",
        category_id:"juveniles grupo 1",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-10T17:00",
        endDate: "2024-02-10T21:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-12T19:30",
        endDate: "2024-02-12T21:30",
        category_id:"adultos nivel iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-13T18:30",
        endDate: "2024-02-13T20:00",
        category_id:"juveniles grupo 2",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-13T20:15",
        endDate: "2024-02-13T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-14T18:30",
        endDate: "2024-02-14T20:00",
        category_id:"juveniles grupo 1",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-14T20:15",
        endDate: "2024-02-14T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-15T19:30",
        endDate: "2024-02-15T21:30",
        category_id:"adultos nivel iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-16T18:30",
        endDate: "2024-02-16T20:00",
        category_id:"juveniles grupo 2",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-16T20:15",
        endDate: "2024-02-16T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-17T11:30",
        endDate: "2024-02-17T13:15",
        category_id:"juveniles grupo 1",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-17T17:00",
        endDate: "2024-02-17T21:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-19T19:30",
        endDate: "2024-02-19T21:30",
        category_id:"adultos nivel iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-20T18:30",
        endDate: "2024-02-20T20:00",
        category_id:"juveniles grupo 2",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-20T20:15",
        endDate: "2024-02-20T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-21T18:30",
        endDate: "2024-02-21T20:00",
        category_id:"juveniles grupo 1",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-21T20:15",
        endDate: "2024-02-21T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-22T19:30",
        endDate: "2024-02-22T21:30",
        category_id:"adultos nivel iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-23T18:30",
        endDate: "2024-02-23T20:00",
        category_id:"juveniles grupo 2",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-23T20:15",
        endDate: "2024-02-23T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-24T11:30",
        endDate: "2024-02-24T13:15",
        category_id:"juveniles grupo 1",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-24T17:00",
        endDate: "2024-02-24T21:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-26T19:30",
        endDate: "2024-02-26T21:30",
        category_id:"adultos nivel iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-27T18:30",
        endDate: "2024-02-27T20:00",
        category_id:"juveniles grupo 2",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-27T20:15",
        endDate: "2024-02-27T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-28T18:30",
        endDate: "2024-02-28T20:00",
        category_id:"juveniles grupo 1",
        instructor_id: "alan@gmail.com",
        spots: 16,
    },
    {
        startDate: "2024-02-28T20:15",
        endDate: "2024-02-28T22:00",
        category_id:"muro libre",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
    {
        startDate: "2024-02-29T19:30",
        endDate: "2024-02-29T21:30",
        category_id:"adultos nivel iniciación",
        instructor_id: "alan@gmail.com",
        spots: 25,
    },
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