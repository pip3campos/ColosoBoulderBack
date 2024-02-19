import { Schema, model, Types } from "mongoose";

let collection = "coaches"
let schema = new Schema({
    fullName: {type:String, required:true},
    climber_id: {type:Types.ObjectId, required:true},
    active: {type:Boolean,default:false}
},{
    timestamps:true
})

let Coach = model(collection, schema)

export default Coach