import { Schema, model, Types } from "mongoose";

let collection = "coaches"
let schema = new Schema({
    name: {type:String, required:true},
    last_name: {type:String},
    city: {type:String},
    country: {type:String},
    availability: {type:String},
    classes_role: {type:Array},
    classes_taught: {type:Number},
    photo: {type:String},
    climber_id: {type:Types.ObjectId, required:true},
    active: {type:Boolean,default:false}
},{
    timestamps:true
})

let Coach = model(collection, schema)

export default Coach