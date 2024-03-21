const mongoose=require("mongoose")

const UserDetailSchema = new mongoose.Schema({
    username:{type:String,unique:true},
    email:{type:String,unique:true},
    firstName:String,
    firstName:String,
    phoneNumber:Number,
    password:String
},{
    collection:"UserInfo"
})

mongoose.model("UserInfo", UserDetailSchema)