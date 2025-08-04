import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true,
            lowercase:true

        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:[true, "Password is required"],
            unique:false,

        }
    
    },{timestamps:true}
)

export const User = new mongoose.model("User",userSchema);