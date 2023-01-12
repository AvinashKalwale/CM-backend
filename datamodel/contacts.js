const mongoose=require("mongoose")
const Schema=mongoose.Schema

const contactschema = new Schema({
    UserId:String,
    Name: String,
    Designation:String,
    Company:String,
    Industry:String,
    Email:String,
    Phonenumber:String,
    Country:String
  });
const contact = mongoose.model('contact',contactschema);
module.exports=contact