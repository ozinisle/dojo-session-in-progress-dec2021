

require([
    "dojo/ready",
    "dojo/parser",
    "dijit/form/RadioButton",
    "dojo/dom",
    "dojo/on",
    "dijit/form/Button", // used for example purpose
    "dojo/domReady!"
], function(ready, parser, RadioButton, dom, on){
    ready(function(){
        parser.parse();

        on(dom.byId("submitButton"),'click',function(event) {
            with(dom.byId('myform'))
                with(elements[0])
                    with(elements[checked?0:1])
                        alert(name+'='+value);
    
            return false;
        })
    });
});