import { Schema, model, Types } from "mongoose";

let collection = "coaches"
let schema = new Schema({
    fullName: {type:String, required:true},
    climber_id: {
        type:Types.ObjectId,
        required:true,
        ref: 'climbers'
    },
    active: {type:Boolean,default:false}
},{
    timestamps:true
})

let Coach = model(collection, schema)

export default Coach