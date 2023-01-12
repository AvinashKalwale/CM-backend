const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true,trim:true},
    password:{type:String,required:true,trim:true}
},{versionKey:false})

const user = new mongoose.model("user",userSchema);

module.exports = user;