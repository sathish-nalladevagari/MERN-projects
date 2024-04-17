import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./modals/User.js";
import jwt from "jsonwebtoken";
import authenticateToken from "./utils.js";
import Todo from "./modals/Note.js";

const app = express();
mongoose.connect(process.env.MONGOURI);

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

//routes

app.get("/", async (req, res) => {
  res.json({
    data: "Hello word",
  });
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username) return res.json("username is required");
  if (!email) return res.json("email is required");
  if (!password) return res.json("password is required");

  try {
    const isUser = await User.findOne({ email });
    if (isUser)
      return res.json({
        error: true,
        message: "email with user already exits",
      });

    const user = new User({
      username,
      email,
      password,
    });

    await user.save();

    const accessToken = jwt.sign({ user }, process.env.SECRET, {
      expiresIn: "3000m",
    });

    return res.status(200).json({
      error: false,
      user,
      accessToken,
      message: "User creation success",
    });
  } catch (error) {
    return res.json({
      error: true,
      message: "Internal server error",
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email && !password) {
      return res.json({
        error: true,
        message: "Please provide all required credentials email and password",
      });
    }

    const userInfo = await User.findOne({ email });
    if (!userInfo) return res.json({ error: true, message: "No user found" });

    if (userInfo.email == email && userInfo.password == password) {
      const user = { userInfo };
      const accessToken = jwt.sign({ user }, process.env.SECRET, {
        expiresIn: "3000m",
      });
      return res.status(200).json({
        error: false,
        user,
        accessToken,
        message: "Login success",
      });
    }

    return res.json({
      error: true,
      message: "Credentials not matched",
    });
  } catch (error) {
    return res.json({
      error: true,
      message: "Internal server error",
    });
  }
});

app.post("/create", authenticateToken, async (req, res) => {
  const { title, desc } = req.body;
  const { user } = req.user;
  console.log(user);

  try {
    if (!title && !desc)
      return res.json({
        error: true,
        message: "Please provide required fileds",
      });
    const todo = new Todo({
      title,
      desc,
      userId: user.userInfo._id,
    });
    await todo.save();
    return res.json({
      error: false,
      todo,
      message: "Task created success",
    });
  } catch (error) {
    return res.json({
      error: true,
      message: "Internal server error",
    });
  }
});

app.get("/all", authenticateToken, async (req, res) => {
  const { user } = req.user;
  try {
    const todos = await Todo.find({ userId: user.userInfo._id });
    if (!todos)
      return res.json({
        error: true,
        message: "No todos found",
      });

    return res.json({
      error: false,
      todos,
      message: "Retrive success",
    });
  } catch (error) {
    return res.json({
      error: true,
      message: "Internal Error",
    });
  }
});

app.put("/edit/:todoId", authenticateToken, async (req, res) => {
  const todoId = req.params.todoId;
  const { title, desc } = req.body;
  const {user} = req.user;

  if (!title && !desc) {
    return res.json({
      error: true,
      message: "provide all required fields",
    });
  }
  try {
    const todo = await Todo.findOne({ _id: todoId, userId: user.userInfo._id });

    if (!todo)
      return res.json({
        error: true,
        message: "No todos found",
      });

    if (title) todo.title = title;
    if (desc) todo.desc = desc;

    await todo.save();
    return res.json({
      error: false,
      todo,
      message: "Edit success",
    });
  } catch (error) {
    return res.json({
      error: true,
      message: error,
    });
  }
});

app.delete("/delete/:todoId", authenticateToken, async(req,res)=>{
    const todoId = req.params.todoId
    const {user} = req.user

    try {
        const todo = await Todo.findOneAndDelete({_id : todoId, userId : user.userInfo._id})
        if(!todo){
            retu
        }
    } catch (error) {
        
    }
})

app.listen(process.env.PORT, () => {
  console.log("server started");
});
