import express from "express";
import mongoose from "mongoose";
import User from "./modals/User.js";

const app = express();

mongoose.connect("mongodb+srv://sathish:Mongopassword04@sathish.2wgak9q.mongodb.net/Vineeth")



app.use(express.json())


app.get("/:name",(req,res)=>{
    const name = req.params.name
    res.json({
        data : `Hello ${name}`
    })
})


app.post("/register", async(req,res)=>{
    const { username , email , password } = req.body
    if (!username && !email  && !password){
        return res.json({
            error : true,
            message : "Please give all required fields"
        })
    }

    try {
        const isUser = await User.findOne({email})
        if (!isUser){
            return res.json({
                error : true,
                message : "email already exites"
            })
        }
        const user = new User(
            username,
            email,
            password
        )
        user.save()
        res.json({
            error : false,
            message : "User created success"
        })
    } catch (error) {
        res.json({
            error : true,
            message : "Internal server error"
        })
    }

})




app.listen(8000, ()=>{
    console.log("Sever started")
})

