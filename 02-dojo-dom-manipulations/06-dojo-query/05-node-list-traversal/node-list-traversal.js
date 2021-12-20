require(["dojo/query", "dojo/NodeList-data", "dojo/domReady!"], function(query, NodeList){

    query("#btn").on("click", function(){
        require(["dojo/query", "dojo/NodeList-traverse", "dojo/NodeList-dom",
        "dojo/domReady!"], function(query){
            query("li.yum")                // get LI elements with the class 'yum'
                .addClass("highlight")    // add a 'highlight' class to those LI elements
                .closest(".fruitList")    // find the closest parent elements of those LIs with the class 'fruitList'
                .prev()                    // get the previous sibling (headings in this case) of each of those fruitList elements
                .addClass("happy")        // add a 'happy' class to those headings
                .style({backgroundPosition: "left", paddingLeft: "20px"}); // add some style properties to those headings
        });
    });
});