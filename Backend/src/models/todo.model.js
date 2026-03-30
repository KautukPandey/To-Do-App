import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        enum: ['Done','Incomplete'],
        default: 'Incomplete'
    }
},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)