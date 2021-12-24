const express = require('express');  
const router = express.Router();
var app = express();  

var bodyParser = require('body-parser'); 

// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

// parse application/json
app.use(bodyParser.json())

router.get("/jsonp-get",(req,res)=>{
   res.end("callback_jsonp({id:'xx-001',key:'key-001',value:'value-001'})");
})

app.use("/",router);
app.use(urlencodedParser);
 
var server = app.listen(4000, function () {  
  console.log("listening at http://localhost:4000")  
})  