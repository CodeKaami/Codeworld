const mongoose = require("mongoose");
const validator  = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid emailid')
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    msg:{
        type:String,
        required:true,
        minLength:3
    },
    date:({
type:Date,
default:Date.now
    }),
})

// we need a colecction 

const User = mongoose.model("User", userSchema);
module.exports = User;