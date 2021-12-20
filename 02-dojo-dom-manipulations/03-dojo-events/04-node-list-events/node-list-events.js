require(["dojo/query", "dojo/_base/lang", "dojo/domReady!"],
    function(query, lang) {

        var myObject = {
            id: "myObject",
            onClick: function(evt){
                alert("The scope of this handler is " + this.id);
            }
        };
        query(".clickMe").on("click", myObject.onClick);
        query(".clickMeAlso").on("click", lang.hitch(myObject, "onClick"));

});