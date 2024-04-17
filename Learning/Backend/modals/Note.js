import mongoose from "mongoose";
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title : {type : String, required : true},
    desc : {type : String, required : true},
    createdOn : {type : Date, default : new Date().getTime()},
    userId : {type : String, required : true}
})

const Todo = mongoose.model('Todo',todoSchema)

export default Todo;