// require the query, dom, and domReady modules
require(["dojo/query", "dojo/dom", "dojo/domReady!"], function (query, dom) {
    // retrieve an array of nodes with the ID "list"
    var list = query("#list")[0];

    // retrieve an array of nodes with the class name "odd"
    var odds = query(".odd");

    //Restricting your query

    // retrieve an array of nodes with the class name "odd"
    // from the first list using a selector
    var odds1 = query("#list .odd");

    // retrieve an array of nodes with the class name "odd"
    // from the first list using a DOM node
    var odds2 = query(".odd", dom.byId("list"));

    //Advanced queries

    var oddA = query("a.odd");

    // Retrieve an array of any a element that has an
    // li as its ancestor.
    var allA = query("li a");
    
    // Retrieve an array of any a element that has an
    // li as its direct parent.
    var someA = query("li > a")
})
