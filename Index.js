var express=require('express');
var app=express(); 

app.listen(3000, ()=> console.log("listening at 3000")); 
app.use(express.static('public'));