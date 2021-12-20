require(["dojo/_base/fx","dojo/on", "dojo/dom", "dojo/domReady!"], function(baseFx, on, dom) {

    var startButton = dom.byId("startButton");
    var reverseButton = dom.byId("reverseButton");

    on(startButton, "click", function(evt){
        baseFx.animateProperty({
            node: dom.byId("anim8target"),
            properties: {
                top: { start: 50, end: 250 },
                left: { start: 0, end: 200},
                opacity: { start: 1, end: 0.5 },
                borderWidth: { start:1, end:10 }
            },
            duration: 800
        }).play();
    });

    on(reverseButton, "click", function(evt){
        baseFx.animateProperty({
            node: anim8target,
            properties: {
                top: { start: 250, end: 50 },
                left: { start: 200, end: 0 },
                opacity: { start: 0.5, end: 1 },
                borderWidth: {start:10, end:1 }
            },
            duration: 800
        }).play();
    });

});