import { Schema, model, Types } from "mongoose";
let collection = 'sessions'
let schema = new Schema({
    date:{type:Date, required:true},
    duration:{type:Number, required:true},
    category:{type:String, required:true},
    level:{type:String, required:true},
    instructor_id:{type:Types.ObjectId, required:true},
    spots:{type:Number, required:true}
},{timestamps:true})
const Session = model(collection, schema)
export default Session