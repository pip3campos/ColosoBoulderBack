import { Schema, model, Types } from "mongoose";
let collection = 'sessions'
let schema = new Schema({
    startDate:{type:Date, required:true},
    endDate:{type:Date, required:true},
    category_id: {
        type: Types.ObjectId,
        required: true,
        ref: 'categories'
    },
    instructor_id:{type:Types.ObjectId, required:true},
    spots:{type:Number, required:true},
    status:{type:String, default:"Active"}
},{timestamps:true})
const Session = model(collection, schema)
export default Session