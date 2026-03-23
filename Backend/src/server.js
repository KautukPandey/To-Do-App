import express from "express";

const PORT = process.env.PORT || 8000
const connectDB = require("./config/db")
const app = require('./app')

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
    
})