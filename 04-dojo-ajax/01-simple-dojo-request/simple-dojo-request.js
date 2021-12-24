require([
    "dojo/request",
    "dojo/dom",
    "dojo/on",
    "dojo/domReady!"
], function(request,dom,on){

    on(dom.byId('sendRequest'),'click',function(event) {
        dom.byId('sendRequestResult').innerHtml = "Request sent >>> Please watch console for responses";

        request("http://localhost:8080/fake-backend/data/01-sample-text-file.txt").then(
            function(text){
                console.log("The file's content is: " + text);
            },
            function(error){
                console.log("An error occurred: " + error);
            }
        );
    });
    
});