const mongoose = require('mongoose');

const userModel = mongoose.Schema(
    {
        name:{
            type:String,
            required:"Name is required"
        },
        email:{
            type:String,
            required:"Email is required"
        },
        password:{
            type:String,
            required:"Password is reqired"
        },
        pic:{
            type:String,
            default:"https://www.tenforums.com/attachments/tutorials/146359d1501443008-change-default-account-picture-windows-10-a-user.png"
        }
    },
    {
        timeStamps:true
    }
);

module.exports = mongoose.model("user",userModel);