//the parameter array is a list of dependency and not the module's name. Its defined by the file's name
define([
    // The dojo/dom module is required by this module, so it goes
    // in this list of dependencies.
    'dojo/dom'
], function(dom){
    // Once all modules in the dependency list have loaded, this
    // function is called to define the demo/myModule module.
    //
    // The dojo/dom module is passed as the first argument to this
    // function; additional modules in the dependency list would be
    // passed in as subsequent arguments.

    var counter = {
        value:0,
        nodeId:'',
        containerNode:null
    };

    // This returned object becomes the defined value of this module
    return {
        increment: function () {
            counter.value += 1;
        },

        decrement: function () {
            counter.value -= 1;
        },

        reset: function() {
            counter.value = 0;
        },

        getValue: function() {
            return counter.value;
        },

        embed:function(id) {
            var node = dom.byId(id);
            counter.nodeId = id;
            node.innerHTML = counter.value;
            counter.containerNode = node
        },

        update: function() {
            // var node = dom.byId(counter.nodeId);
            // node.innerHTML = counter.value;
            counter.containerNode.innerHTML = counter.value
        }
    };
});