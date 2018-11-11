console.log("Server.js");

const express= require('express');
var app= express();

app.use(express.static(__dirname+"/public"))
app.get('/',(req, res)=>{
    res.send("Hello express");
});

app.listen(3000);
