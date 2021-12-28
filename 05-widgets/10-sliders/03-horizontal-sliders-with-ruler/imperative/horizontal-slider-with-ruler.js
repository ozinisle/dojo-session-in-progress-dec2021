require([
    "dijit/form/HorizontalSlider",
    "dijit/form/HorizontalRuleLabels",
    "dijit/form/HorizontalRule", 
    "dojo/dom-construct", 
    "dojo/parser", 
    "dojo/dom", 
    "dojo/domReady!"],
function(HorizontalSlider, HorizontalRuleLabels, HorizontalRule, domConstruct, parser, dom) {
    // Create the rules
    var rulesNode = domConstruct.create("div", {}, dom.byId("horzSlider"), "first");
    var sliderRules = new HorizontalRule({
        container: "leftDecoration",
        count: 11,
        style: "width: 5px;"
    }, rulesNode);

    // Create the labels
    var labelsNode = domConstruct.create("div", {}, dom.byId("horzSlider"), "first");
    var sliderLabels = new HorizontalRuleLabels({
        container: "rightDecoration",
        labelStyle: "font-style: italic; font-size: 0.75em"
    }, labelsNode);

    // Create the horizontal slider programmatically
    var horzSlider = new HorizontalSlider({
        minimum: 0,
        maximum: 100,
        pageIncrement: 20,
        value: 20,
        intermediateChanges: true,
        style: "height: 200px;"
    }, "horzSlider");

    // Start up the widgets
    horzSlider.startup();
    sliderRules.startup();
    sliderLabels.startup();
}
);