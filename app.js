const express=require('express');


const app=express();
app.set("view engine", "ejs");


app.get('/',(req,res)=>{
    console.log('home page');
    res.render("home");
})


app.listen(3000,()=>{
    console.log("server is starting your localhost");
})