require(["dojo/_base/fx", "dojo/fx", "dojo/on", "dojo/dom", "dojo/domReady!"], function(baseFx, fx, on, dom) {

    var slideAwayButton = dom.byId("slideAwayButton"),
        slideBackButton = dom.byId("slideBackButton"),
        slideTarget = dom.byId("slideTarget");

    // Set up a couple of click handlers to run our chained animations
    on(slideAwayButton, "click", function(evt){
        fx.chain([
            baseFx.fadeIn({ node: slideTarget }),
            fx.slideTo({ node: slideTarget, left: "200", top: "200" }),
            baseFx.fadeOut({ node: slideTarget })
        ]).play();
    });
    on(slideBackButton, "click", function(evt){
        fx.chain([
            baseFx.fadeIn({ node: slideTarget }),
            fx.slideTo({ node: slideTarget, left: "0", top: "100" }),
            baseFx.fadeOut({ node: slideTarget })
        ]).play();
    });
});