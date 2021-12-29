

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
    function createUserList(node, users){
        var nodeRef = dom.byId(node);

        return when(
                users,
                function(users){
                    arrayUtil.forEach(users, function(user){
                        domConstruct.create("li", {
                            innerHTML: JSON.stringify(user)
                        }, nodeRef);
                    });
                },
                function(error){
                    domConstruct.create("li", {
                        innerHTML: "Error: " + error
                    }, nodeRef);
                }
        );
    }

    domReady(function(){
        var users = request.get("http://localhost:3000/process-get-json", {
            handleAs: "json"
        }).then(function(response){
            return arrayUtil.map(response, function(user){
                return {
                    id: user.id,
                    username: user.username,
                    name: user.name
                };
            });
        });

        createUserList("userlist1", users); // this is proof of "PROMISE CASE"

        createUserList("userlist2",         // this is proof of "VALUE CASE WITH CALLBACK"
                [{ id: 100, username: "Ramesh", name: "Ramesh Gupta" }]);  
    });
});