import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    createdOn : { type : Date , default : new Date().getTime()}
})

const User = mongoose.model('User',UserSchema)
export default User;