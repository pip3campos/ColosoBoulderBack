import { Schema, model, Types } from "mongoose";
let collection = 'payments'
let schema = new Schema({
    itemType: {
        type:String,
        required: true
    },
    amount: {
        type:Number,
        required: true
    },
    user: {
        type:Types.ObjectId,
        required: true,
        ref: 'climbers'
    },
},{timestamps:true})
const Payment = model(collection, schema)
export default Payment