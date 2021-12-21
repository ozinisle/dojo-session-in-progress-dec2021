require(["dojo/router","dojo/dom","dojo/on","dojo/domReady!"], 
    function(router,dom,on) {
        router.register("/foo/bar", function(evt){
          // Will fire when the hash matches
          // evt.params.id will contain what is passed in :id
          //console.log("Hash change", router.params.id);

          console.log("Route listener fired");
        
        });
        on(dom.byId("changeHash"), "click", function(){
            router.go("/foo/bar");
        });
    
        // Startup must be called in order to "activate" the router
        router.startup();
    });
  