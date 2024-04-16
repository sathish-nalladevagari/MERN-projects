require("dotenv").config();

const mongoose = require("mongoose")

const express = require('express')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken')


mongoose.connect(process.env.MongoURI)
const {authenticateToken} = require("./utilities")

const User = require("./modals/Usermodel")
const Note = require("./modals/Notemodel")
app.use(express.json())

app.use(cors({
    origin : "*"
}));

//routes

app.get("/",(req,res)=>{
    res.json({'data':'hello world'})
})

app.post("/register", async(req,res)=>{
    const {fullName , email , password} = req.body;
    
    if(!fullName) return res.status(400).json({'error' : true , message : "fullName is required"})

    if(!email) return res.status(400).json({'error' : true , message : "email is required"})

    if(!password) return res.status(400).json({'error' : true , message : "password is required"})

    const isUser = await User.findOne({email : email});

    if(isUser) return res.json({
        error : true,
        message : "User already exits"
    })

    const user = new User({
        fullName,
        email,
        password
    })
    await user.save();
    const accessToken = jwt.sign({user},process.env.SECRET,{
        expiresIn : "3600m"
    })

    return res.json({
        error : false,
        user,
        accessToken,
        message : "Registration Success"
    })

})

app.post("/login", async(req,res)=>{
    const {email,password} = req.body;

    if(!email) return res.json({error : true, message : "Email is required"})

    if(!password) return res.json({error : true, message : "Password is required"})

    const userInfo = await User.findOne({email});
    console.log(userInfo)

    if(!userInfo) return res.json({error : true, message : "User not found"})

    if (userInfo.email == email && userInfo.password == password){
        const user = { user : userInfo}
        const accessToken = jwt.sign({user} , process.env.SECRET, {
            expiresIn: "3600m"
        })
        return res.json({
            error : false,
            email,
            accessToken,
            message : "Login success"
        })
    } else{
        return res.status(400).json({
            error : true,
            message : "Invalid credentials",

        })
    }

})

//notes

app.post("/create", authenticateToken,async(req,res)=>{
    const { title, content , tags} = req.body
    const {user} = req.user

    if (!title) return res.json({error: true, message : "Title requires"})

    if (!content) return res.json({error: true, message : " Content requires"})
    console.log(user)
    try {
        const note = new Note({
            title,
            content,
            tags : tags || [],
            userId : user.user._id
        })

        await note.save();

        return res.json({
            error : false,
            note,
            message : "Note added Successfully"
        })

    } catch (error) {
        return res.json({
            error : true,
            message : "Internal server error"
        })
    }
     
})

app.put("/edit/:noteId",authenticateToken, async(req,res)=>{
    const noteId = req.params.noteId
    const {title, content, tags, isPinned } = req.body
    const {user} =  req.user

    if (!title && !content && !tags){
        return res.status(400).json({
            error : true,
            message : "No Changes provided"
        })
    }

    try {
        const note = await Note.findOne({_id : noteId , userId : user.user._id})

        
        if(!note){
            return res.json({
                error : true,
                message : "No note found"
            })
        }

        if (title) note.title = title
        if (content) note.content = content
        if (tags) note.tags = tags
        if (isPinned) note.isPinned = isPinned

        await note.save()
        return res.json({
            error: false,
            note,
            message : "Note updated successfully"
        })

    } catch (error) {
        return res.json({
            error : true,
            message : "Internal server error"
        })
    }
})

app.get("/all", authenticateToken, async (req,res)=>{
    const {user} = req.user
    try {
       const notes = await Note.find({userId : user.user._id }).sort({isPinned : -1 })


       return res.json({
        error : false,
        notes,
        message : "All notes collected"
       })
    } catch (error) {
        return res.json({
            error : true,
            message : "Internal server error"
        })
    }
})

app.delete("/delete/:noteId", authenticateToken, async(req,res)=>{
    const noteId = req.params.noteId
    const {user} = req.user

    try {
        const note = await Note.findOne({   _id : noteId , userId : user.user._id})
        if (!note) return res.json({
            error : true,
            message : "No notes found"
        })

        await Note.findOneAndDelete({_id : noteId , userId : user.user._id})

        return res.json({
            error:false,
            message : "Deleted Success"
        })
    } catch (error) {
        return res.status(400).json({
            error : true,
            message : "Internal server error"
        })
    }
})


app.listen(8000 ,()=>{
    console.log("Server Started")
})