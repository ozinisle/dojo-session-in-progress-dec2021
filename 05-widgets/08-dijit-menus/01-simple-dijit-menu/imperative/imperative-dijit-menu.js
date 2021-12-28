// require([
//     "dijit/Menu",
//     "dijit/MenuItem",
//     "dojo/domReady!"
// ], function(Menu, MenuItem){
//     // create the Menu container
//     var menu = new Menu({}, "mainMenu");

//     // create and add child item widgets
//     // for each of "edit", "view", "task"
//     menu.addChild(new MenuItem({
//         id: "edit",
//         label: "Edit"
//     }));

//     menu.addChild(new MenuItem({
//         id: "view",
//         label: "View"
//     }));

//     menu.addChild(new MenuItem({
//         id: "task",
//         label: "Task"
//     }));

//     menu.startup();
// });


require([
    "dojo/dom",
    "dojo/parser",
    "dijit/Menu",
    "dijit/MenuItem",
    "dijit/registry",
    "dijit/WidgetSet", // for registry.byClass
    "dojo/domReady!"
], function(dom, parser, Menu, MenuItem, registry){
    // a menu item selection handler
    var onItemSelect = function(event){
        dom.byId("lastSelected").innerHTML = "Last selected: " + this.get("label");
    };

    // create equivalent programmatic example
    var menu = new Menu({}, "progMenu");

    menu.addChild(new MenuItem({
        id: "p_edit",
        label: "Edit",
        iconClass: "dijitIconEdit"
    }) );

    menu.addChild(new MenuItem({
        id: "p_view",
        label: "View",
        iconClass: "dijitIconApplication"
    }) );

    menu.addChild(new MenuItem({
        id: "p_task",
        label: "Task",
        iconClass: "dijitIconTask"
    }) );

    menu.startup();
    parser.parse();

    registry.byClass("dijit.MenuItem").forEach(function(item){
        item.on("click", onItemSelect);
    });
});