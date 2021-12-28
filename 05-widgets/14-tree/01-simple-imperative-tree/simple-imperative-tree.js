require([
    "dojo/_base/window", "dojo/store/Memory",
    "dijit/tree/ObjectStoreModel", "dijit/Tree",
    "dojo/store/Observable",
    "dojo/domReady!"
], function(win, Memory, ObjectStoreModel, Tree, Observable){

  
    //Controller - create the Store Controller
    // Create test store, adding the getChildren() method required by ObjectStoreModel
    var myStore = new Memory({
        data: treeStoreData,
        getChildren: function(object){
            return this.query({parent: object.id});
        }
    });

    //Model - Subject the Controller to a Model
    // Create the model
    var myModel = new ObjectStoreModel({
        store: myStore,
        query: {id: 'world'}
    });

    //View - Bind the Model to the View
    // Create the Tree.
    var tree = new Tree({
        model: myModel
    });
    tree.placeAt('tree');
    tree.startup();

    
    

});