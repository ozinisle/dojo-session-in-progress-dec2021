require(["dojo/_base/fx", "dojo/on", "dojo/dom", "dojo/domReady!"], function(fx, on, dom) {
    var fadeOutButton = dom.byId("fadeOutButton"),
        fadeInButton = dom.byId("fadeInButton"),
        fadeTarget = dom.byId("fadeTarget");

    on(fadeOutButton, "click", function(evt){
        fx.fadeOut({ node: fadeTarget }).play();
    });
    on(fadeInButton, "click", function(evt){
        fx.fadeIn({ node: fadeTarget }).play();
    });
});