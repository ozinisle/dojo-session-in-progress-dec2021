require(["dijit/registry", "dojo/parser", "dijit/Dialog", "dojo/domReady!"], function(registry, parser){
    // Show the dialog
    showDialog = function() {
        registry.byId("ajaxDialog").show();
    }

    parser.parse();
});