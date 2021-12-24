// enabled by dojo/request/script

function callback_jsonp(data) {
    window._topic.publish("jsonp_response", JSON.stringify(data));
}

require(["dojo/dom", "dojo/on", "dojo/request/script",
        "dojo/json","dojo/topic", "dojo/domReady!"
], function(dom, on, script, JSON,topic){
    // Results will be displayed in resultDiv
    var resultDiv = dom.byId("resultDiv");

    window._topic = topic;

    topic.subscribe("jsonp_response", function(data){
        dom.byId("resultDiv").innerHTML = data;
    });
    
    // Attach the onclick event handler to the makeRequest button
    on(dom.byId('makeJsonpRequest'),"click", function(evt){

        // When the makeRequest button is clicked, send the current
        // date and time to the server in a JSONP request
        var d = new Date(),
            dateNow = d.toString();
        script.get("http://localhost:4000/jsonp-get",{
            // Tell the server that the callback name to
            // use is in the "callback" query parameter
            jsonp: "callback_jsonp",
            // Send the date and time
            query: {
                clienttime: dateNow
            }
        }).then(function(data){
            // Display the result
            resultDiv.innerHTML = JSON.stringify(data);
        },function(err) {
            resultDiv.innerHTML = err.message;
            console.error(err);
        });
    });

    on(dom.byId('makeNormalGetRequest'),'click',function(event) {
        require(["dojo/request"], function(request){
            request.post("http://localhost:4000/jsonp-get").then(function(text){
                console.log("Normal CORS request : >>> ", text);
                dom.byId("normalCall_resultDiv").innerHTML = text;
            },function(err){
                console.error(err);
                dom.byId("normalCall_resultDiv").innerHTML = err.message;
            });
        });
        
    });

    
});
