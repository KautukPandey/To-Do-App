import { Todo } from "../models/todo.model";

export const addTodo = async (req,res)=>{
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

export const getTodos = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        
    }
}

export const updateTodos = async (req,res) => {
    try {
        const {id} = req.params
        const updateTodo = await Todo.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"Updated",updateTodo})
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteTodo = async(req,res)=>{
    try {
        const {id} = req.params
        const todo = await Todo.findByIdAndDelete(id)
        res.status(200).json({message:"Deleted successfully"})
        
    } catch (error) {
        console.log(`Error`);
        
    }
}