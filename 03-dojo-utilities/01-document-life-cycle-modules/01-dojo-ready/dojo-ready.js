require(["dojo/ready"], function(ready){
    ready(function(){
      // This function won't run until the DOM has loaded and other modules that register
      // have run.
    });
  });

  
require(["dojo/ready", "dijit/registry", "dojo/dom", "dojo/parser", "dijit/form/Button"],
function(ready, registry, dom, parser){
    ready(function(){
        parser.parse();
        
        registry.byId("myWidget1").set("label", "I fired after parser!");

        //dom.byId("myWidget1").innerHTML = "Button1 Modified Label";
    });

    try {
        dom.byId("myWidget2").innerHTML = "Button2 Modified Label";
    } catch (err) {
        console.log(err.message) ;
    }
    
});