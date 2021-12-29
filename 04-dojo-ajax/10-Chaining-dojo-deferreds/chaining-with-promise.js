require(["dojo/request", "dojo/_base/array", "dojo/json", "dojo/dom-construct", "dojo/dom", "dojo/domReady!"], function(request, arrayUtil, JSON, domConstruct, dom) {

    // this is a promise
    var original = request.get("http://localhost:3000/process-get-json", {
        handleAs: "json"
    });

    //this fragment of code will create userlist1
    var result = original.then(function(res){
        var userlist = dom.byId("userlist1");

        return arrayUtil.map(res, function(user){
            domConstruct.create("li", {
                innerHTML: JSON.stringify(user)
            }, userlist);

            return {
                id: user.id,
                // username: user.username,
                name: user.name
            };
        });
    });

    //this fragment of code will create userlist2
    //Note :: you are using the value returned from the previous block to do the following
    //Observe that we are not making any further ajax calls. We are just extending the usage of 
    //already existing code with out modifying it
    result.then(function(objs){
        var userlist = dom.byId("userlist2");

        arrayUtil.forEach(objs, function(user){
            domConstruct.create("li", {
                innerHTML: JSON.stringify(user)
            }, userlist);
        });
    });

    //this fragment of code will create userlist3
    //Note :: the above method of chaining has left the original deferred untouched
    //we are not explicitly resolving or rejecting it and  hence we can use it again
    original.then(function(res){
        var userlist = dom.byId("userlist3");

        arrayUtil.forEach(res, function(user){
            domConstruct.create("li", {
                innerHTML: JSON.stringify(user)
            }, userlist);
        });
    });

});