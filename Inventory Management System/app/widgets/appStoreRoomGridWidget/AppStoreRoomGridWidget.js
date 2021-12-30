define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/dom",
	"dojo/on",
	"dojo/text!./AppStoreRoomGridWidget.html",
    'dstore/RequestMemory',
    'dgrid/Grid',
    'dgrid/extensions/Pagination'
], function (declare, _WidgetBase, _TemplatedMixin, dom, on, template, 
		RequestMemory,Grid, Pagination) {
	//debugger;
	return declare([_WidgetBase, _TemplatedMixin], {

		// Our template - important!
		templateString: template,

		// A class to be applied to the root node in our template
		baseClass: "app-layout-widget",

		targetNode: 'storeRoom_grid',

		appLayout:null,

		constructor:function() {
			this.inherited(arguments)
		},


		buildRendering: function() {

			this.inherited(arguments);

		},

		postCreate: function () {
			this.inherited(arguments);

			 // Create a Grid instance using Pagination, referencing the store
			 var grid = new (declare([ Grid, Pagination ]))({
				collection: new RequestMemory({ target: 'app/data/hof-batting.json' }),
				className: 'dgrid-autoheight',
				columns: {
					first: 'First Name',
					last: 'Last Name',
					totalG: 'Games Played'
				}
			}, this.domNode);
		
			grid.startup();
			
		},

		getLayout: function() {
			return this.appLayout;
		}
	});
});