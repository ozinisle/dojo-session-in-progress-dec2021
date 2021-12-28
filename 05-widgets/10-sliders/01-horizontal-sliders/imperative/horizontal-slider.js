// Require the slider class
require(["dijit/form/HorizontalSlider"], function(HorizontalSlider) {
    // Create the horizontal slider programmatically
    var horzSlider = new HorizontalSlider({
        minimum: 0,
        maximum: 100,
        pageIncrement: 20,
        value: 20,
        intermediateChanges: true,
        style: "height: 200px;"
    }, "hslider");

    // Start up the widget
    horzSlider.startup();
});