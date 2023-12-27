import { Schema, model, Types } from "mongoose";
let collection = 'sessions'
let schema = new Schema({
    date:{type:Date, required:true},
    duration:{type:String, required:true},
    level:{type:String, required:true},
    price:{type:Number, required:true},
    wall:{type:String, required:true},
    instructor_id:{type:Types.ObjectId, required:true},
    description:{type:String},
    location:{type:String},
    spots:{type:Number, required:true},
    status:{type:String}
},{timestamps:true})
const Session = model(collection, schema)
export default Session