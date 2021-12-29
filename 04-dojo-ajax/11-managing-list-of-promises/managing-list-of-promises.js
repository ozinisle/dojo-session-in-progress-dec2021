require(["dojo/promise/all", "dojo/Deferred", "dojo/request", "dojo/_base/array", "dojo/dom-construct", "dojo/dom", "dojo/json", "dojo/domReady!"],
function(all, Deferred, request, arrayUtil, domConstruct, dom, JSON){
    var usersDef = request.get("http://localhost:3000/process-get-json", {
        handleAs: "json"
    }).then(function(response){
        var users = {};

        arrayUtil.forEach(response, function(user){
            users[user.id] = user;
        });

        return users;
    });

    var statusesDef = request.get("http://localhost:3000/get-status-json", {
        handleAs: "json"
    });
    
    //provides a mechanism to manage multiple asynchronous processes by essentially 
    //combining the results of several promises into a single promise

    all([usersDef, statusesDef]).then(function(results){
        var users = results[0],
            statuses = results[1],
            statuslist = dom.byId("statuslist");

        if(!results[0] || !results[1]){
            domConstruct.create("li", {
                innerHTML: "An error occurred"
            }, statuslist);
            return;
        }
        arrayUtil.forEach(statuses, function(status){
            var user = users[status.userId];
            domConstruct.create("li", {
                id: status.id,
                innerHTML: user.name + ' said, "' + status.status + '"'
            }, statuslist);
        });
    });
});