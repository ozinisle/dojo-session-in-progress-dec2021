define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/dom",
	"dojo/on",
	"dojo/text!./AppHomePageGridWidget.html",
	"dojo/request",
    'dstore/RequestMemory',
	'dgrid/OnDemandGrid',
    "dijit/tree/ObjectStoreModel", 
    "dijit/Tree",
], function (declare, _WidgetBase, _TemplatedMixin, dom, on, template, 
		request,RequestMemory,OnDemandGrid,Memory,ObjectStoreModel,Tree) {
	//debugger;
	return declare([_WidgetBase, _TemplatedMixin], {

		// Our template - important!
		templateString: template,

		// A class to be applied to the root node in our template
		baseClass: "app-layout-widget",

		targetNode: null,

		appLayout:null,

		constructor:function(targetContainer) {
			this.targetNode = targetContainer;
			this.inherited(arguments)
		},


		buildRendering: function() {

			this.inherited(arguments);

		},

		postCreate: function () {
			this.inherited(arguments);

			const IntervalFlag = setInterval(()=>{
				const gridTargetNode = dom.byId(this.targetNode);
				if(gridTargetNode) {

					// Once the response is received, build an in-memory store with the data
					var store = new RequestMemory({ target: '/app/data/hof-batting.json' });

					// Create an instance of OnDemandGrid referencing the store
					var grid = new OnDemandGrid({
						collection: store,
						sort: 'last', // Initialize sort on last name, ascending
						columns: {
							first: 'First Name',
							last: 'Last Name',
							totalG: 'Games Played'
						}
					}, this.targetNode);

					grid.startup();

					on(dom.byId('queryForm'), 'submit', function(event) {
						event.preventDefault();
						grid.set('collection', store.filter({
							// Pass a RegExp to Memory's filter method
							// Note: this code does not go out of its way to escape
							// characters that have special meaning in RegExps
							last: new RegExp(this.elements.last.value, 'i')
						}));
					});

					on(dom.byId('queryForm'), 'reset', function() {
						// Reset the query when the form is reset
						grid.set('collection', store);
					});

					on(dom.byId('sortLastAsc'), 'click', function() {
						// Simple case: pass a string representing field to be
						// sorted in ascending order
						grid.set('sort', 'last');
					});

					on(dom.byId('sortGamesDesc'), 'click', function() {
						// Advanced case: pass array of objects, following
						// the same format as sort in dstore
						grid.set('sort', [ { property: 'totalG', descending: true } ]);
					});
					
					clearInterval(IntervalFlag);
				}
			})

			
		},

		getLayout: function() {
			return this.appLayout;
		}
	});
});