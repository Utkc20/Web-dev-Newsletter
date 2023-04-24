//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  var firstname=req.body.fname;
  var lastname=req.body.lname;
  var email=req.body.email;

  console.log(firstname,lastname,email);
});


app.listen(3000,function(){
  console.log("Server is running on port 3000");
});


//API KEY
//0b7bc4bb0f7024f9a3b87836cf60faf3-us21
