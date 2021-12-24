const express = require('express');  
const cors = require('cors');
const router = express.Router();
var app = express();  

var bodyParser = require('body-parser'); 

// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
//app.use(bodyParser.json({limit: '50mb'})); 


// parse application/json
app.use(bodyParser.json())


// app.use(function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "https://localhost:8080");
//    res.header("Access-Control-Allow-Credentials", "true");
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
//  });

//  app.use((req, res, next) => {
//    const host = req.get('host');
//    const origin = req.get('origin');
//  });

 var allowedOrigins = ['http://localhost:3000',
                      'http://localhost:8080'];
app.use(cors({  
  origin: function(origin, callback){
    // allow requests with no origin     
    // (like mobile apps or curl requests)    
    if(!origin) 
      return callback(null, true);    
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +                
          'allow access from the specified Origin.';      
      return callback(new Error(msg), false);    
    }    
    return callback(null, true);  
  }
}));

router.get("/",(req,res)=>{
   res.end("Response for a simple get request obtained via AJAX");
});

router.get("/process-get",(req,res)=>{
   res.end("get request was obtained with request >>> " + JSON.stringify(req.query));
})

router.get("/process-get-json",(req,res)=>{
   var sampleJSONResponse = [
      { "id": 1, "username": "usr001", "name": "Venkatesh" , "designation": "tutor"},
      { "id": 2, "username": "usr002", "name": "Rowan" , "designation": "trainee"},
      { "id": 3, "username": "usr003", "name": "Prakash" , "designation": "trainee"}
   ];
   res.json(sampleJSONResponse);
});

router.get("/get-status-json",(req,res)=>{
   var sampleJSONResponse = [
      { "id": 1, "userId": 2, "status": "Hello!" },
      { "id": 2, "userId": 3, "status": "Eating a sandwich..." },
      { "id": 3, "userId": 1, "status": "Dojo rocks!!" }
   ];
   res.json(sampleJSONResponse);
});

router.post("/process-post",(req,res)=>{
   try {
      
      res.end("post request was obtained with request >>> " + JSON.stringify(req.body));
      
   } catch (err){
      res.json({ error:err.message || err.toString() });
   }
});

router.post("/submit-form",urlencodedParser,(req,res)=>{
   try {
      console.log("request body is >>> ");
      console.log(req.body);
      //res.end("post request was obtained with request >>> " + JSON.stringify(req.body));
      res.end(JSON.stringify(req.body));
   } catch (err){
      res.json({ error:err.message || err.toString() });
   }
})


app.use("/",router);
app.use(urlencodedParser);


// app.post('/process_post', urlencodedParser, function (req, res) {  
//    // Prepare output in JSON format  
//    response = {  
//        first_name:req.body.first_name,  
//        last_name:req.body.last_name  
//    };  
//    console.log(response);  
//    res.end(JSON.stringify(response));  
// })  
var server = app.listen(3000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  