require(["dojo/fx", "dojo/on", "dojo/dom", "dojo/domReady!"], function(fx, on, dom) {
    var wipeOutButton = dom.byId("wipeOutButton"),
        wipeInButton = dom.byId("wipeInButton"),
        wipeTarget = dom.byId("wipeTarget");

    on(wipeOutButton, "click", function(evt){
        fx.wipeOut({ node: wipeTarget }).play();
    });
    on(wipeInButton, "click", function(evt){
        fx.wipeIn({ node: wipeTarget }).play();
    });
});