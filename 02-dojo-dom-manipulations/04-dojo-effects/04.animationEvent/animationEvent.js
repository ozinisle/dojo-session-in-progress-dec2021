require(["dojo/fx", "dojo/on", "dojo/dom-style", "dojo/dom", "dojo/domReady!"], function(fx, on, style, dom) {

    var slideAwayButton = dom.byId("slideAwayButton"),
        slideBackButton = dom.byId("slideBackButton"),
        slideTarget = dom.byId("slideTarget");

        on(slideAwayButton, "click", function(evt){
            // Note that we're specifying the beforeBegin as a property of the animation
            // rather than using connect. This ensures that our beforeBegin handler
            // executes before any others.
            var anim = fx.slideTo({
                node: slideTarget,
                left: "200",
                top: "200",
                beforeBegin: function(){

                    console.warn("slide target is: ", slideTarget);

                    style.set(slideTarget, {
                        left: "0px",
                        top: "100px"
                    });
                }
            });

            // We could have also specified onEnd above alongside beforeBegin,
            // but it's just as easy to connect like so
            on(anim, "End", function(){
                style.set(slideTarget, {
                    backgroundColor: "blue"
                });
            }, true);

            // Don't forget to actually start the animation!
            anim.play();
        });

        on(slideBackButton, "click", function(evt){
            var anim = fx.slideTo({
                node: slideTarget,
                left: "0",
                top: "100",
                beforeBegin: function(){

                    style.set(slideTarget, {
                        left: "200px",
                        top: "200px"
                    });
                }
            });

            on(anim, "End", function(){
                style.set(slideTarget, {
                    backgroundColor: "red"
                });
            }, true);

            anim.play();
        });
});
