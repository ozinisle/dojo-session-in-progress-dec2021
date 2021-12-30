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

router.get("/authors.json",(req,res)=>{
   var authors = [
      {
         "name": "Brian Arnold",
         "avatar": "./images/brian_arnold/avatar.jpg",
         "bio": "Brian Arnold is a software engineer at <a href=\"http://www.sitepen.com\">SitePen, Inc</a>. He has a lovely wife, two cute dogs, is an active member of (and presenter at) <a href=\"http://webuquerque.com\">Webuquerque</a>, and ranks among the top 3% of fake guitarists in Rock Band."
      },
      {
         "name": "Bryan Forbes",
         "avatar": "./images/bryan_forbes/avatar.jpg",
         "bio": "Bryan Forbes has used Dojo since 2006 and became a Dojo committer shortly thereafter. He rewrote Dojo's effects system for the 0.3 release and currently maintains the DataGrid. He is a senior software engineer at <a href=\"http://www.sitepen.com\">SitePen, Inc</a>."
      },
      {
         "name": "David Walsh",
         "bio": "David Walsh is a software engineer at <a href=\"http://www.sitepen.com\">SitePen, Inc.</a> that blogs frequently about Dojo <a href=\"http://davidwalsh.name/tutorials/dojo\">at his blog</a>."
      },
      {
         "name": "Kris Zyp",
         "avatar": "./images/kris_zyp/avatar.jpg",
         "bio": "Kris Zyp is a Dojo committer and senior software engineer at <a href=\"http://www.sitepen.com\">SitePen, Inc.</a>"
      },
      {
         "name": "Sam Foster",
         "avatar": "./images/sam_foster/avatar.jpg",
         "bio": "Sam Foster is a Dojo committer and senior software engineer at <a href=\"http://www.sitepen.com\">SitePen, Inc.</a>"
      },
      {
         "name": "Tom Trenka",
         "avatar": "./images/tom_trenka/avatar.jpg",
         "bio": "Tom Trenka is one of the original Dojo committers, owner of many DojoX modules and a Senior Software Engineer at <a href=\"http://www.sitepen.com\">SitePen, Inc</a>. He is also a former university lecturer and an accomplished musician."
      }
   ];

   res.json(authors);
});


app.use("/",router);
app.use(urlencodedParser);

 
var server = app.listen(3000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  