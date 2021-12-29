//Deferred gets destroyed after first use

require(["dojo/Deferred", "dojo/request", "dojo/_base/array", "dojo/dom-construct", "dojo/dom", "dojo/on","dojo/domReady!"],
    function(Deferred, request, arrayUtil, domConstruct, dom, on) {

        // Create a deferred and get the user list
        const deferred = new Deferred();

        const deferred_error_scenario = new Deferred();

        const userlist = dom.byId("userlist");

        // Set up the callback and errback for the deferred
        deferred.then(function(res){
            arrayUtil.forEach(res, function(user){
                domConstruct.create("li", {
                    id: user.id,
                    innerHTML: user.username + ": " + user.name
                }, userlist);
            });
        },function(err){
            domConstruct.create("li", {
                innerHTML: "Error: " + err
            }, userlist);
        });

        // Set up the callback and errback for the deferred
        deferred_error_scenario.then(function(res){
            arrayUtil.forEach(res, function(user){
                domConstruct.create("li", {
                    id: user.id,
                    innerHTML: user.username + ": " + user.name
                }, userlist);
            });
        },function(err){
            domConstruct.create("li", {
                innerHTML: "Error: " + err
            }, userlist);
        });

        on(dom.byId('deferred_success_scenario'),'click',function(event) {
            // Send an HTTP request
            request.get("http://localhost:3000/process-get-json", {
                handleAs: "json"}).then(
                function(response){
                    // Resolve when content is received
                    deferred.resolve(response);
                },
                function(error){
                    // Reject on error
                    deferred.reject(error);
                }
            );
        });
        
        
        //CAUTION;
        //reusing the same deferred used in the above scenario will not work 
        //once a deferred is either "resolved" or "rejected" it gets destroyed
        //In the following case I am using the same deferred that I used in the above 
        //scenario to illustrate a failed scenario.

        //Code will seem to work fine, but you will not see any output being reported

        on(dom.byId('deferred_reused_scenario'),'click',function(event) {
            request.get("http://localhost:3000/process-get", {
                handleAs: "json"}).then(
                function(response){
                    // Resolve when content is received
                    deferred.resolve(response);
                },
                function(error){
                    // Reject on error
                    deferred.reject(error);
                }
            );
        });
        


        // However following failed scenario will work fine as I am using a new deferred in it
        on(dom.byId('deferred_error_scenario'),'click',function(event) {
            request.get("http://localhost:3000/process-get", {
                handleAs: "json"}).then(
                function(response){
                    // Resolve when content is received
                    deferred_error_scenario.resolve(response);
                },
                function(error){
                    // Reject on error
                    deferred_error_scenario.reject(error);
                }
            );
        });   
});