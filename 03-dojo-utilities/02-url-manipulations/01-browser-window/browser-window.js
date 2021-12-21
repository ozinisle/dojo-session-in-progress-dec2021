require(["dojo/window","dojo/dom","dojo/domReady!"], function(win,dom){
    // win contains features

    //dojo/window::getBox()
    //getBox() returns an object which represents the size of the viewport.
    var vs = win.getBox();

    console.log("Window.getBox() >>>");
    console.log(vs);

    //dojo/window::scrollIntoView()
    //Scrolls a node into view, similar to node.scrollIntoView() but working around browser quirks.
    node = dom.byId("targetNode");
    //scrolls into view but for some reason togggles back to the top
    win.scrollIntoView(node);

 

    //dojo/window::get()
    //Gets the window object associated with a document.
    var w = win.get(node.ownerDocument);
    console.log("Window.get() >>> document >>>");
    console.log(w);

    

    


  });
  