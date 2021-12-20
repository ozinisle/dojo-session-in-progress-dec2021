require(["dojo/fx", "dojo/on", "dojo/dom", "dojo/domReady!"], function(fx, on, dom) {
    var slideAwayButton = dom.byId("slideAwayButton"),
        slideBackButton = dom.byId("slideBackButton"),
        slideTarget = dom.byId("slideTarget");

    on(slideAwayButton, "click", function(evt){
        fx.slideTo({ node: slideTarget, left: "200", top: "200" }).play();
    });
    on(slideBackButton, "click", function(evt){
        fx.slideTo({ node: slideTarget, left: "0", top: "100" }).play();
    });
});