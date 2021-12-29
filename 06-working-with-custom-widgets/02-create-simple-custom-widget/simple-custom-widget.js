require([
    "dojo/_base/declare", "dojo/dom-construct", "dojo/ready", "dojo/_base/window",
    "dijit/_WidgetBase",
], function(declare, domConstruct, ready, win, _WidgetBase){

    declare("MyFirstWidget", [_WidgetBase], {
        buildRendering: function(){
            // create the DOM for this widget
            this.domNode = domConstruct.create("button", {innerHTML: "push me"});
        }
    });

    ready(function(){
        // Create the widget programmatically and place in DOM
        (new MyFirstWidget()).placeAt(win.body());
    });
 });
	