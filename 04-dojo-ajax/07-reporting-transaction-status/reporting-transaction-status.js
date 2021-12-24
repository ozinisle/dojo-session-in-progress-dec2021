require([
    "dojo/request/notify",
    "dojo/dom-form",
    "dojo/request",
    "dojo/dom",
    "dojo/on",
    "dojo/dom-construct", 
    "dojo/query",
    "dojo/domReady!"
], function(notify,domForm,request,dom,on,domConstruct,query){

    // Listen for events from request providers
    notify("start", function(){
        domConstruct.place("<p>Start</p>","divStatus");
    });
    notify("send", function(data, cancel){
        domConstruct.place("<p>Sent request</p>","divStatus");
    });
    notify("load", function(data){
        domConstruct.place("<p>Load (response received)</p>","divStatus");
    });
    notify("error", function(error){
        domConstruct.place("<p class=\"error\">Error</p>","divStatus");
    });
    notify("done", function(data){
        domConstruct.place("<p>Done (response processed)</p>","divStatus");
        if(data instanceof Error){
            domConstruct.place("<p class=\"error\">Error</p>","divStatus");
        }else{
            domConstruct.place("<p class=\"success\">Success</p>","divStatus");
        }
    });
    notify("stop", function(){
        domConstruct.place("<p>Stop</p>","divStatus");
        domConstruct.place("<p class=\"ready\">Ready</p>", "divStatus");
    });

    var form = dom.byId('formNode');

    // Attach the onsubmit event handler of the form
    on(form, "submit", function(evt){

        // prevent the page from navigating after submit
        evt.stopPropagation();
        evt.preventDefault();

        // Post the data to the server
        request.post("http://localhost:3000/submit-form", {
           
            // Send the username and password
            data: domForm.toObject("formNode"),
            // Wait 2 seconds for a response
            timeout: 2000,

            handleAs: "json"

        }).then(function(response){
            console.log(response);
            dom.byId('serverResponse').innerHTML = response;
        });
    });
            
});