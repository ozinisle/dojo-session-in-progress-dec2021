require([
    "dojo/dom-form",
    "dojo/request",
    "dojo/dom",
    "dojo/on",
    "dojo/domReady!"
], function(domForm,request,dom,on){

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
            timeout: 2000

        }).then(function(response){
            dom.byId('serverResponse').innerHTML = response;
        });
    });
            
});