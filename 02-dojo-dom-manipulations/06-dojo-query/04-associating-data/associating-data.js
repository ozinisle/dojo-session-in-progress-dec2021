require(["dojo/query", "dojo/NodeList-data", "dojo/domReady!"], function(query, NodeList){
    function mark(){
        var nodeList = new NodeList(this);        // make a new NodeList from the clicked element
        nodeList.data("updated", new Date());    // update the 'updated' key for this element via the NodeList
    }

    query("#btn").on("click", function(){
        query("li")                            // get all list items
        .data("updated", new Date())    // set the initial data for each matching element
        .on("click", mark);                // add the event handler

        query("li").data("updated").forEach(function(date){
            console.log(date.getTime());
        });
    });
});