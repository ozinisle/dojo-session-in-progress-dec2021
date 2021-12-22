


  require(["dojo/mouse", "dojo/touch", "dojo/keys", "dojo/on", "dojo/dom","dojo/domReady!"], 
    function(mouse, touch, keys, on, dom){
    on(dom.byId("eventTarget"), mouse.enter, function(evt){
      // handle mouse enter event
      console.log("mouse enter event triggered");
    });

    on(dom.byId("eventTarget"), mouse.leave, function(evt){
        // handle mouse leave event
        console.log("mouse leave event triggered");
    });

      //   mouseButtons
    // The mouseButtons object has the following properties and methods:

    // LEFT - The number corresponding to the “button” property value on the event when the left mouse button is clicked.
    // MIDDLE - The number corresponding to the “button” property value on the event when the middle mouse button is clicked.
    // RIGHT - The number corresponding to the “button” property value on the event when the right mouse button is clicked.
    // isLeft(event) - Indicates if the left mouse button was used in the provided event.
    // isMiddle(event) - Indicates if the middle mouse button was used in the provided event.
    // isRight(event) - Indicates if the right mouse button was used in the provided event.

    on(dom.byId("eventTarget"), "click", function(event){
        if (mouse.isLeft(event)){
            // handle mouse left click
            console.log("left mouse click detected");
        }   else if (mouse.isRight(event)){
            // handle mouse right click
            console.log("right mouse click detected");
        }
    });

    on(dom.byId("eventTarget"), touch.press, function(e){
        // handle event
        console.log("touch press event detected");
    });

    //touchstart and touchend events available

    on(dom.byId("keyboardEventTarget"), "keypress", function(event){
        switch(event.charCode){
            case 97:
                console.log("A is pressed ");
                break;
            case 98:
                // handle left arrow
                console.log("B is pressed ");
                break;
        }
    });

    //all keys in the keyboad can be detected
      
  });

 
  

