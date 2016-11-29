var express = require("express");
var app = express();
var router = express.Router();
var path = require('path');//var path = require(__dirname + '/views/';



router.get("/",function(req,res){
  res.sendFile(__dirname + '/views/' + "index.html");
});



app.use("/",router);



app.use(express.static(path.join(__dirname, 'public')));
//app.use('/static', express.static('public'))

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
