require([
    "dojo/parser", 
    "dijit/form/DropDownButton", 
    "dijit/TooltipDialog", 
    "dijit/form/TextBox", 
    "dijit/form/Button", 
    "dojo/domReady!"],
    function(parser){
        parser.parse();

        function doAlert() {
            alert("ok");
        }
    });