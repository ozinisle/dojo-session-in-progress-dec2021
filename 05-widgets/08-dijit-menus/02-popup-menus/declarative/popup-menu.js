// Require the Menu and MenuItem class, and the dojo/parser,
        // and make sure the DOM is ready
        require([
            "dijit/Menu",
            "dijit/MenuItem",
            "dijit/PopupMenuItem",
            "dojo/parser",
            "dojo/domReady!"
        ], function(Menu, MenuItem, PopupMenuItem, parser){
            parser.parse();
        });