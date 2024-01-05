import Category from "../Category.js"
import Climber from "../Climber.js"
import 'dotenv/config.js'
import '../../config/db.js'

let categories = [
    {
        name: "muro libre",
        color: "#ef8481",
        description: "Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur.",
        category_photo: "https://i.postimg.cc/0jdQ27GW/shonen-character.png",
        admin_id: "alan@gmail.com"
    },{
        name: "adultos nivel iniciación",
        color: "#8883f0",
        description: "Marvel, DC and anothers comics",
        category_photo: "https://i.postimg.cc/dQmtCmdn/comics-character.png",
        admin_id: "alan@gmail.com"
    },{
        name: "adultos nivel avanzado",
        color: "#00ba88",
        description: "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        category_photo: "https://i.postimg.cc/YqzGpBbr/shojo-character.png",
        admin_id: "alan@gmail.com"
    },{
        name: "juveniles grupo 1",
        color: "#fc9c57",
        description: "Japanese seinen tells stories with a mature tone. Some frequent themes in the plots are sex, violence and politics.",
        category_photo: "https://i.postimg.cc/6pQ3t28c/seinen-character.png",
        admin_id: "alan@gmail.com"
    },{
        name: "juveniles grupo 2",
        color: "#757575",
        description: "Japanese seinen tells stories with a mature tone. Some frequent themes in the plots are sex, violence and politics.",
        category_photo: "https://i.postimg.cc/6pQ3t28c/seinen-character.png",
        admin_id: "alan@gmail.com"
    }
]

async function add_category(category) {
    let user = await Climber.findOne({ email:category.admin_id })
    let admin_id = user._id
    category.admin_id = admin_id
    await Category.create(category)
}

categories.forEach(category=>add_category(category))