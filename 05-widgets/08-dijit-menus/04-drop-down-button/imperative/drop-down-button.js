 // Require dependencies
 require([
    "dijit/Menu",
    "dijit/MenuItem",
    "dijit/form/ComboButton",
    "dojo/domReady!"
], function(Menu, MenuItem, ComboButton) {
    var menu = new Menu({ id: "mainMenu" });

    //These events are possible
        // onItemHover: function() {
        //     console.log("Event triggered >>> onItemHover");
        // },
        // onItemUnHover: function() {
        //     console.log("Event triggered >>> onItemUnHover");
        // },
        // onItemClick: function() {
        //     console.log("Event triggered >>> onItemClick");
        // },
        // onOpen: function() {
        //     console.log("Event triggered >>> onOpen");
        // },
        // onClose: function() {
        //     console.log("Event triggered >>> onClose");
        // }

    menu.addChild(new MenuItem({
        label: "Edit"
    }));

    menu.addChild(new MenuItem({
        label: "View"
    }));

    menu.addChild(new MenuItem({
        label: "Task"
    }));

    // create a ComboButton and add the Menu
    var comboBtn = new ComboButton({
        label: "Do Something",
        dropDown: menu
    }, "comboBtn");

    menu.startup();
    comboBtn.startup();
});