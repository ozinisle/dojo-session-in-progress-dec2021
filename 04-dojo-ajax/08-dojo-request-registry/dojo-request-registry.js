require(["dojo/request/registry", "dojo/request/script", "dojo/dom", "dojo/dom-construct", "dojo/on","dojo/topic",
    "dojo/domReady!"],
function(request, script, dom, domConst, on,topic){
    // Registers anything that ends in ".jsonp.js" be sent to the script provider
    request.register(/jsonp/i, script);

    on(dom.byId("startButton"), "click", function(){
        domConst.place("<p>request: 'http://localhost:4000/jsonp-get'</p>", "output");
       
        request.get("http://localhost:4000/jsonp-get", {
            jsonp: "callback_jsonp"
        }).then(function(data){
            domConst.place("<p>script data: <code>" + JSON.stringify(data) + "</code></p>", "output");
        });
        
        domConst.place("<p>request: 'http://localhost:3000/process-get'</p>", "output");
        
        request.get("http://localhost:3000/process-get").then(function(data){
            dom.byId('normalRequest_serverResponse').innerHTML = data ;
        });
    });

    var resultDiv = dom.byId("resultDiv");

    window._topic = topic;

    topic.subscribe("jsonp_response", function(data){
        dom.byId("jsonp_resultDiv").innerHTML = data;
    });
});



function callback_jsonp(data) {
    window._topic.publish("jsonp_response", JSON.stringify(data));
}