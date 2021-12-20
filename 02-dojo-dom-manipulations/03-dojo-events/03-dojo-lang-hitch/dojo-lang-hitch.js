require(["dojo/on", "dojo/dom", "dojo/_base/lang", "dojo/domReady!"],
    function(on, dom, lang) {

        var myScopedButton1 = dom.byId("myScopedButton1"),
            myScopedButton2 = dom.byId("myScopedButton2"),
            myObject = {
                id: "myObject",
                onClick: function(evt){
                    alert("The scope of this handler is " + this.id);
                }
            };

        // This will alert "myScopedButton1"
        on(myScopedButton1, "click", myObject.onClick);
        // This will alert "myObject" rather than "myScopedButton2"
        on(myScopedButton2, "click", lang.hitch(myObject, "onClick"));

});