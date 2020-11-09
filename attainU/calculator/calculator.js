const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    var n1 = Number(req.body.height);
    var n2 = Number(req.body.weight);
    var result = n2 / (n1*n1);
    res.send("Your BMI is "+ result)
});

app.get("/Divide",function(req,res){
    res.sendFile(__dirname + "/divide.html");
});
app.post("/Divide",function(req,res){
    var n1=parseFloat(req.body.firstN);
    var n2=parseFloat(req.body.secondN);
    res.send("division result is"+n1/n2);
});

app.listen(3000,function(){
    console.log("server is running on port: 3000");
});
