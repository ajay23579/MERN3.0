const express = require('express')
const app = express()
const connectToDatabase = require('./dataBase/index')

connectToDatabase()

app.get('/',(req,res)=>{
    res.json({
        message : 'this is home page'
    })
})


app.get('/about',(req,res)=>{
    res.json({
        message : "This is about page"
    })
})



app.listen(3000,()=>{
    console.log("starting in port 3000")
})