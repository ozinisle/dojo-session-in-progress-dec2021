

require([
    "dojo/ready",
    "dojo/parser",
    "dijit/form/ToggleButton",
    "dojo/dom",
    "dojo/on"
], function(ready, parser, ToggleButton, dom, on){
    ready(function(){
        parser.parse();

        var myToggleButton = new ToggleButton({
            checked: true,
            iconClass: "dijitCheckBoxIcon",
            label: "Toggle Me"
        }, "toggleButtonProgrammatic");

        on(dom.byId("changeLabel"),"click",function(event){
            myToggleButton.set("label", "Just Toggle");
        })
    });
});