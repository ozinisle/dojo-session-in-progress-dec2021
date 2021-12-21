require(["dojo/domReady!"], function(){
    // will not be called until DOM is ready
  });

// difference between dojo-ready and dojo-dom-ready
// dojo/ready -> will get a variable definition "ready", where as "dojo/domReady!" won't

// Note that waiting for dojo/domReady! to fire is often not sufficient when working with widgets. Many widgets shouldn’t be initialized or accessed until the following modules load and execute:

// dojo/uacss
// dijit/hccss
// dojo/parser
// Thus when working with widgets you should generally put your code inside of a dojo/ready() callback:

// Sync Loader
// You should not use dojo/domReady! with modules that may be loaded with the legacy synchronous loader.
// In other words, if your application does not specify async: true in the Dojo configuration, or if it loads modules via dojo.require() instead of the AMD require() API, then using dojo/domReady! may cause dojo.ready() to call its callback before all the modules have loaded.

require(["dijit/form/Button", "dojo/ready"], function(Button, ready){
    ready(function(){
      // deal with widgets here
    });
  });
  

  
require(["dojo/dom",  "dijit/form/Button", "dojo/domReady!"],
    function( dom){
        dom.byId("myWidget1").innerHTML = "Button1 Modified Label";
    });

require([  "dojo/dom"],
    function(  dom,){
        try {
            dom.byId("myWidget2").innerHTML = "Button2 Modified Label";
        } catch (err) {
            console.log(err.message) ;
        }
    });