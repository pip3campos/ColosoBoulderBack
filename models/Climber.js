import { Schema, model, Types } from "mongoose";

let collection = "climbers"

let schema = new Schema({
    email: { type:String, required:true },
    password: { type:String, required:true },
    name: {type:String},
    emergency_contact: {type:String},
    role: { type:Number, default:0 },
    lessons: {type:Number},
    dailyPass: {type:Number},
    membership: {type:Number},
    online: { type:Boolean, default:false },
    verified: { type:Boolean, default:false },
    verify_code: { type:String }
},{
    timestamps:true
})

let Climber = model(collection, schema)

export default Climber