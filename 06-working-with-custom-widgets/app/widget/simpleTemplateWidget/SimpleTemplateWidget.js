define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./SimpleTemplateWidget.html",
	"dojo/dom-style",
], function(declare, _WidgetBase, _TemplatedMixin, template, domStyle ){
        return declare([_WidgetBase, _TemplatedMixin], {
            
			name: "Simple Template Widget",
			
			templateString: template,

			// A class to be applied to the root node in our template
			baseClass: "authorWidget",
	
			// postCreate is called once our widget's DOM is ready,
			// but BEFORE it's been inserted into the page!
			// This is far and away the best point to put in any special work.
			postCreate: function(){
				// Get a DOM node reference for the root of our widget
				var domNode = this.domNode;

				// Run any parent postCreate processes - can be done at any point
				this.inherited(arguments);

				// Set our DOM node's background color to white -
				// smoothes out the mouseenter/leave event animations
				domStyle.set(domNode, "backgroundColor", "green");
				
			},

			
		});
    });