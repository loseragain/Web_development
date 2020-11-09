const express = require("express")
const https = require("https")
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")
    
});

app.post("/",function(req,res) {
    const appid="18336c0301a9b31394aef5cba8bf0782"
    const cityName = req.body.CityName
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+appid
    https.get(url,function(response){
        response.on("data",function(data){
            const weatherinfo = JSON.parse(data);
            const imgurl = "http://openweathermap.org/img/wn/10n.png"
            res.write("<h1>Temperature in "+cityName+" is "+weatherinfo.main.temp+ "</h1>");
            res.write("<p>weather is "+weatherinfo.weather[0].description+"</p>");
            res.write("<img src= "+imgurl+" ></img>")
            res.send()
        });
    });
});
// 
    
//         console.log(response.statusCode);

//     });



app.listen(5000,function(){
    console.log("Server is running on port: 5000");
})