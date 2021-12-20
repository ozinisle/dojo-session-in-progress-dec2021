// Require the DOM resource


function createListItem() {
    
    require(["dojo/dom", "dojo/dom-construct", "dojo/domReady!"], function(dom,domConstruct) {    
        var list = dom.byId("list");
        
        //will be appended to the list at last by default
        domConstruct.create("li", {
            innerHTML: "Six"
        }, list);

        //will be appended to the list at last by default
        domConstruct.create("li", {
            innerHTML: "Seven",
            className: "seven",
            id:'seven',
            style: {
                fontWeight: "bold"
            }
        }, list);

        three = dom.byId("three");
        //inserting after a specific element
        domConstruct.create("li", {
            innerHTML: "Three and a half"
        }, three, "after");
    });
}

function readList() {

    require(["dojo/dom", "dojo/domReady!"], function(dom) {    
        node = dom.byId("list");
        const content = node.innerHTML ;

        console.log("List HTML content is >>> \n" + content);
    });

}

function updateList() {
    require(["dojo/dom", "dojo/domReady!"], function(dom) {

        function setText(node, text){
            node = dom.byId(node);
            node.innerHTML = text;
        }
    
        var one = dom.byId("one");
        setText(one, "One has been set");
        setText("two", "Two has been set as well");
    
    });
}

function deleteItem() {
    require(["dojo/dom", "dojo/dom-construct", "dojo/domReady!"], function(dom,domConstruct) {    
        

        three = dom.byId("seven");

        //removing  a specific element
        //three.remove();

        //removing  a specific element
        //domConstruct.destroy(three);

        //remove all
        domConstruct.empty("list");
    });
}