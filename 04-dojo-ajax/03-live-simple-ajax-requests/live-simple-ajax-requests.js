require([
    "dojo/request",
    "dojo/dom",
    "dojo/on",
    "dojo/domReady!"
], function(request,dom,on){

    on(dom.byId('sendPOSTRequest'),'click',function(event) {
        dom.byId('sendPOSTRequestResult').innerHtml = "Request sent >>> Please watch console for responses";

        require(["dojo/request"], function(request){
            
            request.post("http://localhost:3000/process-post",{
            
                data: {
                    color: "blue",
                    answer: 42
                },

                headers: {
                    "X-Something": "A value"
                }
            }).then(function(text){
                console.log("The server returned: >>> ", text);
            },function(err){
                console.error(err)
            });
        });
        
    });
    
    on(dom.byId('sendGETRequest'),'click',function(event) {
        dom.byId('sendGETRequestResult').innerHtml = "Request sent >>> Please watch console for responses";

        require(["dojo/request"], function(request){
            request.get("http://localhost:3000/process-get", {
                query: {
                    color: "blue",
                    answer: 42
                },
                headers: {
                    "X-Something": "A value"
                }
            }).then(function(text){
                console.log("The server returned: >>> ", text);
            },function(err){
                console.error(err)
            });
        });
        
    });
});