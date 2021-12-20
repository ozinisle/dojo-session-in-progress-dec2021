require(["dojo/_base/fx", "dojo/dom", "dojo/fx/easing", "dojo/window", "dojo/on", "dojo/domReady!"], function(baseFx, dom, easing, win, on) {
    var dropButton = dom.byId("dropButton"),
        ariseSirButton = dom.byId("ariseSirButton"),
        anim8target = dom.byId("anim8target");

    // Set up a couple of click handlers to run our animations
    on(dropButton, "click", function(evt){
        // get the dimensions of our viewport
        var viewport = win.getBox(win.doc);
        baseFx.animateProperty({
            // use the bounceOut easing routine to have the box accelerate
            // and then bounce back a little before stopping
            easing: easing.bounceOut,
            duration: 500,
            node: anim8target,
            properties: {
                // calculate the 'floor'
                // and subtract the height of the node to get the distance from top we need
                top: { start: 0, end:viewport.h - anim8target.offsetHeight }
            }
        }).play();
    });
    on(ariseSirButton, "click", function(evt){
        baseFx.animateProperty({
            node: anim8target,
            properties: { top: 0 }
        }).play();
    });
});