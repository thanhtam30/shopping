const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    fullName:{type:String},
    email:{type:String},
    phone:{type:String},
    password:{type:String},
    userType:{type:String,default:'user'}
})
const User=mongoose.model('User',UserSchema);
module.exports={User,UserSchema};