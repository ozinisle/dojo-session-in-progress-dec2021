require([
    "dojo/request",
    "dojo/dom",
    "dojo/on",
    "dojo/domReady!"
], function(request,dom,on){

    on(dom.byId('sendPOSTRequest'),'click',function(event) {
        dom.byId('sendPOSTRequestResult').innerHtml = "Request sent >>> Please watch console for responses";

        require(["dojo/request"], function(request){
            //method
            //Several helper functions are provided to make specifying this option easier 
            //(`request.get`,`request.post`, `request.put`, `request.del`)
            request.post("http://localhost:8080/fake-backend/data/01-sample-text-file.txt", {
            // sync - A boolean that, if true, causes the request to block until the server has
            // responded or the request has timed out.
            
            // query - A string or key-value object containing query parameters to append to
            // the URL.
            
            // data - A string, key-value object, or FormData object containing data to
            // transfer to the server.
            
                data: {
                    color: "blue",
                    answer: 42
                },
            // timeout - Time in milliseconds before considering the request a failure and triggering
            // the error handler.
            
            // handleAs - A string representing how to convert the text payload of the response before
            // passing the converted data to the success handler. Possible formats are "text" (the default), "json",
            // "javascript", and "xml".

                headers: {
                    "X-Something": "A value"
                }
            }).then(function(text){
                console.log("The server returned: >>> ", text);
            });
        });
        
    });
    
    on(dom.byId('sendGETRequest'),'click',function(event) {
        dom.byId('sendGETRequestResult').innerHtml = "Request sent >>> Please watch console for responses";

        require(["dojo/request"], function(request){
            //method
            //Several helper functions are provided to make specifying this option easier 
            //(`request.get`,`request.post`, `request.put`, `request.del`)
            request.get("http://localhost:8080/fake-backend/data/01-sample-text-file.txt", {
            // sync - A boolean that, if true, causes the request to block until the server has
            // responded or the request has timed out.
            
            // query - A string or key-value object containing query parameters to append to
            // the URL.
            
            // data - A string, key-value object, or FormData object containing data to
            // transfer to the server.
            
                data: {
                    color: "blue",
                    answer: 42
                },
            // timeout - Time in milliseconds before considering the request a failure and triggering
            // the error handler.
            
            // handleAs - A string representing how to convert the text payload of the response before
            // passing the converted data to the success handler. Possible formats are "text" (the default), "json",
            // "javascript", and "xml".

                headers: {
                    "X-Something": "A value"
                }
            }).then(function(text){
                console.log("The server returned: >>> ", text);
            });
        });
        
    });
});