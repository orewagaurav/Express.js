import mongoose from 'mongoose'
const todoSchema = new mongoose.Schema({},{timestamps:true});
export const User = new mongoose.model("User",todoSchema);