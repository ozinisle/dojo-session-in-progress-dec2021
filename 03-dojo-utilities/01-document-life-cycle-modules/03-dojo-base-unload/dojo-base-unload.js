require(['dojo/_base/unload','dojo/_base/xhr'], function(baseUnload, xhr){
    // Gets triggered when you navigate away as well as close the browser window
    baseUnload.addOnUnload(function(){
          // do some unload stuff
          console.log("addOnUnload >>> unloading...");
          // NOTE: some browsers block alerts in onunload
          alert("unloading...");
    });

    //does not get triggered when you navigate away to other screens
    //triggers only when you close the window
    baseUnload.addOnWindowUnload(function(){
        // do some unload stuff
        console.log("addOnWindowUnload >>> unloading...");
        // NOTE: some browsers block alerts in onunload
        alert("addOnWindowUnload >>> unloading...");
    });
  
    // baseUnload.addOnUnload(function(){
    //      // make sync xhr before page unloads
    //      xhr("POST",{
    //           url: location.href,
    //           sync: true,
    //           handleAs: "text",
    //           content:{
    //               param1:1
    //           },
    //           load:function(result){
    //                // will return before next handler fires
    //                console.log(result);
    //           }
    //      });
    // });
  
    // call a method of an object
    // example: calls a method, unLoad, set on the window
    window.unLoad=function(){
        console.log("an unload function");
        return "This is a message that will appear on unLoad.";
    };
    baseUnload.addOnUnload(window, "unLoad");
  });
  