const express = require("express");

const app = express();
app.get("/",function(request,response){
    response.send("<h1>Hello World!</h1>");
});
app.listen(3000,function(){
    console.log("Server started on port 3000")
});

app.get("/about",function(req,res){
    res.send("<p>Hi my name is Tezaswi Raj. To know about me further contact me at </p><a href='www.facebook.com/tezaswi.raj'>FACEBOOK</a>")
});

app.get("/contact",function(req,res){
    res.send("<p>contact me at tezaswi.rajdps@gmail.com</p><a href='about'>ABOUT</a><a href='contact'>CONTACT</a><a href='hobbies'>HOBBIES</a>")
});

app.get("/hobbies",function(req,res){
    res.send("<ul><li>Lemon Tea</li><li>Code</li><li>Juice</li><li>Cosmic Vibration</li></ul>")
});
