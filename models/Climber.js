import { Schema, model, Types } from "mongoose";

let collection = "climbers"

let schema = new Schema({
    email: { type:String, required:true },
    password: { type:String, required:true },
    phone: {type:String, required:true},
    photo: { type:String, required:true },
    date_of_birth: {type:Date},
    emergency_contect: {type:String},
    role: { type:Number, default:0 },
    classes: {type:Number},
    membership: {type:Number},
    online: { type:Boolean, default:false },
    verified: { type:Boolean, default:false },
    verify_code: { type:String }
},{
    timestamps:true
})

let Climber = model(collection, schema)

export default Climber