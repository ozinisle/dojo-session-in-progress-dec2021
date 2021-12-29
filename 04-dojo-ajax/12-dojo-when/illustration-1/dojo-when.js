

// dojo/when
// ----------------------
// function signature :: when(promise||value, optional callback, optional errorHandler, optional progressHandler)

// functionality/action 
// ----------------------
// If the first argument is not a promise 
//     - If  callback is provided,                              - Let us call this scenario as "VALUE CASE WITH CALLBACK"
//         - the callback will be called immediately 
//         - with the provided value as the first argument, 
//         - and the result of the callback will be returned.       
    
//     - If the callback is not provided, 
//         - the first argument will be returned immediately.       - Let us call this scenario as "VALUE CASE WITHOUT CALLBACK"

// If the first argument is a promise, 
//     - the callback, error handler, and progress handler are passed to the promise's then method, 
//     - and the resulting promise is returned, 
//     - setting up your callback to execute when the promise is ready.  - Let us call this scenario as  "PROMISE CASE"

require([
    "dojo/when",
    "dojo/request",
    "dojo/_base/array",
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/json",
    "dojo/domReady"
], function(when, request, arrayUtil, dom, domConstruct, JSON, domReady){

    var users;
    
    //closure that returns a function that returns, either a promise or a value
    var getUserList = (function(){
        
        //return a function that will return, either a promise or a value
        return function(){
            //returns a promise
            if(!users){
                return request.get("http://localhost:3000/process-get-json", {
                    handleAs: "json"
                }).then(function(response){
                    // Save the resulting array into the users variable
                    users = arrayUtil.map(response, function(user){
                        return {
                            id: user.id,
                            username: user.username,
                            name: user.name
                        };
                    });

                    // Make sure to return users here,
                    // for valid chaining
                    return users;
                });
            }

            //returns a value
            return users;
        };
    })();

    domReady(function(){
        when(getUserList(), function(users){        // this is proof of "PROMISE CASE"
            // This callback will be run after the request completes

            var userlist = dom.byId("userlist1");
            arrayUtil.forEach(users, function(user){
                domConstruct.create("li", {
                    innerHTML: JSON.stringify(user)
                }, userlist);
            });

            when(getUserList(), function(user){ // this is proof of "VALUE CASE WITH CALLBACK"
                // This callback will be run right away since it's already in the cache

                var userlist = dom.byId("userlist2");
                arrayUtil.forEach(users, function(user){
                    domConstruct.create("li", {
                        innerHTML: JSON.stringify(user)
                    }, userlist);
                });
            });
        });
    });
});