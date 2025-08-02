require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! ')
})
app.get('/gaurav',(req,res)=>{
  res.send("<h1 style= color:red >Hello gaurav</h1>")
})
app.get('/login',(req,res)=>{
  res.send("Login page")
})
app.get('/orewagaurav',(req,res)=>{
  res.send("orewagaurav");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
