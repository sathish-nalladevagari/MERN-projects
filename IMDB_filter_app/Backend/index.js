import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config()
import movieRoute from "./routes/movieRoute.js";
import cors from "cors"

const app = express()
app.use(cors())

app.use("/",movieRoute)

app.get("/",(req,res)=>{
    res.status(200).json("Welcome to IMDB Filter")
})

mongoose.connect(process.env.MONGOURI)
.then(()=>{
    console.log("database connected ")
})
.catch((error)=>{
    console.log("Not connect",error)
})

app.listen(process.env.PORT,()=>{
    console.log("server started")
})