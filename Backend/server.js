import dotenv from 'dotenv';
import express from 'express';
const app = express();
dotenv.config();//loads environment variables from .env file into process.env
const port = process.env.PORT|| 4000; // Fallback to 4000 if PORT is not set in .env
console.log('PORT from env:', process.env.PORT);
app.get('/',(req,res)=>{
    res.send("Hello Gaurav");
})
app.listen(port,()=>{
    console.log(`Active at port : ${port}`);
    
})
