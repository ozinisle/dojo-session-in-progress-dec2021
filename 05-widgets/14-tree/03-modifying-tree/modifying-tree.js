require([
    "dojo/aspect", "dojo/_base/window", "dojo/store/Memory", "dojo/store/Observable",
    "dijit/Tree", "dijit/tree/ObjectStoreModel", "dijit/tree/dndSource",
    "dojo/dom",
    "dojo/on",
    "dojo/domReady!"
], function(aspect, win, Memory, Observable, Tree, ObjectStoreModel, dndSource, dom, on){

        // Create test store, adding the getChildren() method required by ObjectStoreModel,
        // and making put(child, {parent: parent}) work
        var memoryStore = new Memory({
            data: treeStoreData,
            getChildren: function(object){
                return this.query({parent: object.id});
            }
        });
        aspect.around(memoryStore, "put", function(originalPut){
            // To support DnD, the store must support put(child, {parent: parent}).
            // Since memory store doesn't, we hack it.
            // Since our store is relational, that just amounts to setting child.parent
            // to the parent's id.
            return function(obj, options){
                if(options && options.parent){
                    obj.parent = options.parent.id;
                }
                return originalPut.call(memoryStore, obj, options);
            }
        });

        // Wrap the store in Observable so that updates to the store are reflected to the Tree
        var observableStore = new Observable(memoryStore);

        // Create the model
        var myModel = new ObjectStoreModel({
            store: observableStore,
            query: {id: 'world'}
        });

        // Create Tree
        (new Tree({
            model: myModel,
            dndController: dndSource,
            betweenThreshold: 5
        })).placeAt('tree').startup();

        on(dom.byId("addItem"),'click',function(event){
            observableStore.add({id: 'US', name:'United States', type:'country', parent: 'NA'});
            dom.byId('status').innerHTML += `<br>Added tree item named United States under 'North America'<br> `;
        })
    
        on(dom.byId("removeItem"),'click',function(event){
            observableStore.remove('EU');
            dom.byId('status').innerHTML += `<br>Removed Europe folder item<br> `;
        })
    });