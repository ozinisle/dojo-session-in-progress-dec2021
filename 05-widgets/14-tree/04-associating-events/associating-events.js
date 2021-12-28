require([
    "dojo/request",
    "dojo/dom", 
    "dojo/json", 
    "dojo/store/Memory",
    "dijit/tree/ObjectStoreModel", 
    "dijit/Tree", 
    "dojo/domReady!"
],function(request,dom,json,Memory,ObjectStoreModel,Tree) {


    request.get("../data/govt-structure-small.data.json",{
        handleAs: 'json'
    }
    ).then(
        function(data) {
            // debugger;
            // console.log("response >>>", response);

            // set up the store to get the tree data
            var governmentStore = new Memory({
                data: [data],
                getChildren: function(object){
                    return object.children || [];
                }
            });

            // set up the model, assigning governmentStore, and assigning method to identify leaf nodes of tree
            var governmentModel = new ObjectStoreModel({
                store: governmentStore,
                query: {id: 'root'},
                mayHaveChildren: function(item){
                    return "children" in item;
                }
            });

            // set up the tree, assigning governmentModel;
            var governmentTree = new Tree({
                model: governmentModel,
                onOpenClick: true,
                onLoad: function(){
                    //dom.byId('image').src = '../resources/images/root.jpg';
                    console.log("loading the tree >>> ", this);
                },
                onClick: function(item){
                    //dom.byId('image').src = '../resources/images/'+item.id+'.jpg';
                    console.log("clicked item >>> ", item);

                },
                persist:false
            }, "tree");
            governmentTree.startup()

        }, function (error) {
            console.log("error >>>", error);
        }
    )
})