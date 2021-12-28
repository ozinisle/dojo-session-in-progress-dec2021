require([
    "dojo/aspect", "dojo/_base/window", "dojo/store/Memory", "dojo/store/Observable",
    "dijit/Tree", "dijit/tree/ObjectStoreModel", "dijit/tree/dndSource",
    "dojo/dom",
    "dojo/on",
    "dojo/store/JsonRest",
    "dojo/domReady!"
], function(aspect, win, Memory, Observable, Tree, ObjectStoreModel, dndSource, dom, on, JsonRest){

        console.log(" For JsonRest feature to work, the server should follow the URL Conventions /{Table}/{id} ");

        console.log(" You will see that the following code - All of them erroring out");

        console.log(" That is because a compatible backend api has not been created yet. Placed here for illustration purpose only");

        console.log(" This just follows a protocol and initiates the transaction get, query, put, remove etc... ");

        console.log(" The actual implementation happens in the backend layer");

        var store = new JsonRest({
            target: "../data/tree-store.data.json"
        });

        // Get an object by identity
        store.get('world').then(function(item){
            console.log("store.get('world') returned item >>> ", item)
        });

        // Query for objects with options
        store.query("type=country", {
            start: 10,
            count: 10,
            sort: [
            { attribute: "name", descending: true }
            ]
        }).then(function(results){
            // results should contain up to 10 items, sorted by "name" in descending fashion
            console.log("results of store.query('type=country',{...}) is >>> ", results);   
        });

        // Store an object identified by identity
        store.put({
            id: "IL"
        }, {
            name:"Independent League", 
            type:"planet", 
            population: "a few"
        });

        // Remove an object by ID
        store.remove('SA');


    });