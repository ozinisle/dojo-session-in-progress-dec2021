require(["dojo/_base/fx","dojo/on", "dojo/dom", "dojo/domReady!"], function(baseFx, on, dom) {

    var startButton = dom.byId("startButton");
    var reverseButton = dom.byId("reverseButton");

    on(startButton, "click", function(evt){
        baseFx.animateProperty({
            node: dom.byId("anim8target"),
            properties: { borderWidth: 100 }
        }).play();
    });

    on(reverseButton, "click", function(evt){
        baseFx.animateProperty({
            node: dom.byId("anim8target"),
            properties: { borderWidth: 1 }
        }).play();
    });

});