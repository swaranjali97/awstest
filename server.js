var express=require('express')
var app=express()

app.get('/',(req,res)=>{
    res.sendFile('public/index.html',{root:__dirname})
})

app.listen(8081,function(){
    console.log("server is running on port 8081")
})