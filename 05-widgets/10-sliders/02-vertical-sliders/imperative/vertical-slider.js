// Require the slider class
require(["dijit/form/VerticalSlider"], function(VerticalSlider) {
    // Create the horizontal slider programmatically
    var vertSlider = new VerticalSlider({
        minimum: 0,
        maximum: 100,
        pageIncrement: 20,
        value: 20,
        intermediateChanges: true,
        style: "height: 200px;"
    }, "vertSlider");

    // Start up the widget
    vertSlider.startup();
});