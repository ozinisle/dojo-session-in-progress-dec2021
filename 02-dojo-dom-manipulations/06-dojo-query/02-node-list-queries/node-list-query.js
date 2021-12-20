// Wait for the DOM to be ready before working with it
require(["dojo/dom", "dojo/on", "dojo/query", "dojo/dom-class", "dojo/domReady!"],
    function(dom, on, query, domClass) {

        on(dom.byId("markOddRed"), "click", function(event) {
            query(".odd").forEach(function(node, index, nodelist){
                // for each node in the array returned by query,
                // execute the following code
                domClass.add(node, "red");
            });
        });

        on(dom.byId("markOddRed2"), "click", function(event) {
            // Add "red" to the className of each node matching
            // the selector ".odd"
            query(".odd").addClass("red");
        });
        
        on(dom.byId("markEvenBlue"), "click", function(event) {
            // Add "blue" to the className of each node matching
            // the selector ".even"
            query(".even").addClass("blue");
        });
        
        on(dom.byId("removeRedAddBlue"), "click", function(event) {
            // Remove "red" from and add "blue" to the className
            // of each node matching the selector ".odd"
            query(".odd").removeClass("red").addClass("blue");
        });

        on(dom.byId("styleEven"), "click", function(event) {
            // Change the font color to "white" and add "italic" to
            // the className of each node matching the selector ".even"
            query(".even").style("color", "white").addClass("italic");
        });

        query(".hookUp").on("click", function(){
            alert("This button is hooked up!");
        });
});