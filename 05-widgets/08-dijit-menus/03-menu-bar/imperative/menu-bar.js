
// Require dependencies
require([
    "dijit/Menu",
    "dijit/MenuItem",
    "dijit/MenuBar",
    "dijit/MenuBarItem",
    "dijit/PopupMenuBarItem",
    "dojo/domReady!"
], function(Menu, MenuItem, MenuBar, MenuBarItem,
    PopupMenuBarItem){
    // create the Menu container
    var mainMenu = new MenuBar({}, "mainMenu");

    // create Menu container and child MenuItems
    // for our sub-menu (no srcNodeRef; we will
    //add it under a PopupMenuItem)
    var taskMenu = new Menu({
        id: "taskMenu"
    });

    // define the task sub-menu items
    taskMenu.addChild(new MenuItem({
        id: "complete",
        label: "Mark as Complete"
    }));

    taskMenu.addChild(new MenuItem({
        id: "cancel",
        label: "Cancel"
    }));

    taskMenu.addChild(new MenuItem({
        id: "begin",
        label: "Begin"
    }));

    // create and add main menu items
    mainMenu.addChild(new MenuBarItem({
        id: "edit",
        label: "Edit"
    }));

    mainMenu.addChild(new MenuBarItem({
        id: "view",
        label: "View"
    }));

    // make task menu item open the sub-menu we defined above
    mainMenu.addChild(new PopupMenuBarItem({
        id: "task",
        label: "Task",
        popup: taskMenu
    }));

    mainMenu.startup();
    taskMenu.startup();
});