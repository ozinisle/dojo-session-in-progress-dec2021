define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/dom",
	"dojo/text!./AppSideMenuWidget.html",
	"dojo/request",
    "dojo/store/Memory",
    "dijit/tree/ObjectStoreModel", 
    "dijit/Tree",
], function (declare, _WidgetBase, _TemplatedMixin, dom, template, 
		request,Memory,ObjectStoreModel,Tree) {
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

			request.get("/app/data/inventory.data.json",{
				handleAs: 'json'
			}
			).then(
				data => {

					

					const intervalFlag = setInterval(()=>{
						const navNode = dom.byId(this.targetNode);
			
						if(navNode) {
							var inventoryStore = new Memory({
								data: [data],
								getChildren: function(object){
									return object.children || [];
								}
							});
				
							// set up the model, assigning inventoryStore, and assigning method to identify leaf nodes of tree
							var inventoryModel = new ObjectStoreModel({
								store: inventoryStore,
								query: {id: 'root'},
								mayHaveChildren: function(item){
									return "children" in item;
								}
							});
				
							// set up the tree, assigning inventoryModel;
							var inventoryTree = new Tree({
								model: inventoryModel,
								onOpenClick: true,
								onLoad: function(){
									//dom.byId('image').src = '../resources/images/root.jpg';
									console.log("loading the tree >>> ", this);
								},
								onClick: function(item){
									//dom.byId('image').src = '../resources/images/'+item.id+'.jpg';
									console.log("clicked item >>> ", item);

									if(item.id === "hall_home_1") {
										location.href = "http://localhost:8080/app/pages/hall.html";
									} else if(item.id === "store_room_1" ){
										location.href = "http://localhost:8080/app/pages/storeRoom.html";
									}
				
								},
								persist:false
							}, this.targetNode);
							inventoryTree.startup();
						
							clearInterval(intervalFlag);
						}

					});
		
				}, error => {
					console.log("error >>>", error);
				}
			)
		},

		getLayout: function() {
			return this.appLayout;
		}
	});
});