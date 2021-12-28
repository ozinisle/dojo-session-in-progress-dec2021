require([
    "dijit/form/VerticalSlider",
    "dijit/form/VerticalRuleLabels",
    "dijit/form/VerticalRule", 
    "dojo/dom-construct", 
    "dojo/parser", 
    "dojo/dom", 
    "dojo/domReady!"],
function(VerticalSlider, VerticalRuleLabels, VerticalRule, domConstruct, parser, dom) {
    // Create the rules
    var rulesNode = domConstruct.create("div", {}, dom.byId("vertSlider"), "first");
    var sliderRules = new VerticalRule({
        container: "leftDecoration",
        count: 11,
        style: "width: 5px;"
    }, rulesNode);

    // Create the labels
    var labelsNode = domConstruct.create("div", {}, dom.byId("vertSlider"), "first");
    var sliderLabels = new VerticalRuleLabels({
        container: "rightDecoration",
        labelStyle: "font-style: italic; font-size: 0.75em"
    }, labelsNode);

    // Create the vertical slider programmatically
    var vertSlider = new VerticalSlider({
        minimum: 0,
        maximum: 100,
        pageIncrement: 20,
        value: 20,
        intermediateChanges: true,
        style: "height: 200px;"
    }, "vertSlider");

    // Start up the widgets
    vertSlider.startup();
    sliderRules.startup();
    sliderLabels.startup();
}
);