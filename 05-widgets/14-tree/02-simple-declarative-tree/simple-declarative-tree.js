require([
    "dojo/_base/window", "dojo/store/Memory",
    "dijit/tree/ObjectStoreModel", "dijit/Tree",
    "dojo/domReady!"
], function(win, Memory, ObjectStoreModel, Tree){

    // Create test store, adding the getChildren() method required by ObjectStoreModel
    var myStore = new Memory({
        data: treeStoreData,
        getChildren: function(object){
            return this.query({parent: object.id});
        }
    });

    // Create the model
    var myModel = new ObjectStoreModel({
        store: myStore,
        query: {id: 'world'}
    });

    // Create the Tree.
    var tree = new Tree({
        model: myModel
    });
    tree.placeAt(win.body());
    tree.startup();
});