require(["dojo/dom-construct", "dojo/on", "dojo/query", "dojo/keys", "dojo/domReady!"], 
function(domConstruct, on, query, keys) {
    on(document, "keyup", function(event) {
        document.getElementById("keyCode").value = event.keyCode;
    });

    query("input[type='text']").on("keydown", function(event) {
        //query returns a nodelist, which has an on() function available that will listen
        //to all keydown events for each node in the list
        switch(event.keyCode) {
            case keys.UP_ARROW:
                event.preventDefault();
                //preventing the default behavior in case your browser
                // uses autosuggest when you hit the down or up arrow.
                console.log("up arrow has been pressed");
                break;
            case keys.DOWN_ARROW:
                event.preventDefault();
                //preventing the default behavior in case your browser
                // uses autosuggest when you hit the down or up arrow.
                console.log("down arrow has been pressed");
                break;
            case keys.ENTER:
                console.log("enter has been pressed");
                break;
            default:
                console.log("some other key: " + event.keyCode);
        }
    });
});