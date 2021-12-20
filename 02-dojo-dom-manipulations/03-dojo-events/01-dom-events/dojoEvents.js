

// Event definition Syntax
// on(element,event name,handler)


require(["dojo/on", "dojo/dom", "dojo/dom-style", "dojo/mouse", "dojo/domReady!"],
    function(on, dom, domStyle, mouse) {
        var myButton = dom.byId("myButton"),
            myDiv = dom.byId("myDiv");

        on(myButton, "click", function(evt){
            domStyle.set(myDiv, "backgroundColor", "blue");
        });
        on(myDiv, mouse.enter, function(evt){
            domStyle.set(myDiv, "backgroundColor", "red");
        });
        on(myDiv, mouse.leave, function(evt){
            domStyle.set(myDiv, "backgroundColor", "");
        });

        
});


