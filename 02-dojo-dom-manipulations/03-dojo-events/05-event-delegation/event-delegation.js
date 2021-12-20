require(["dojo/on", "dojo/dom", "dojo/query", "dojo/domReady!"],
    function(on, dom){

        var myObject = {
            id: "myObject",
            onClick: function(evt){
                alert("The scope of this handler is " + this.id);
            }
        };
        var div = dom.byId("parentDiv");
        on(div, ".clickMe:click", myObject.onClick);

});