import { Todo } from "../models/todo.model";

export const addEvent = async (req,res)=>{
    try {
        const {title,description} = req.body
        if(!title || !description){
            return res.status(404).json({
                message: "Fields cannot be empty"
            })
        }
        const createEvent = await Todo.create({
            title: title,
            description: description
        })

        return res.status(201).json({message:"Event added",createEvent})

    } catch (error) {
        console.log(`Error`);
        
    }
}