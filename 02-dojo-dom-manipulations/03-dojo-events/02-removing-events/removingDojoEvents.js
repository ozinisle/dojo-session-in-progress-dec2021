

require(["dojo/on", "dojo/dom", "dojo/dom-style", "dojo/mouse", "dojo/domReady!"],
    function(on, dom, domStyle, mouse) {

        const removeClickEventButton = dom.byId("removeClickEvent");
        var removeClickEventButtonHandle =  on(removeClickEventButton, "click", function(evt){
            // Remove this event using the handle
            removeClickEventButtonHandle.remove();
        
            // Do other stuff here that you only want to happen one time
            alert("This alert will only happen one time.");
        });
});