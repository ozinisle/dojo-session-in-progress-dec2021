// Require the Menu and MenuItem class, and the dojo/parser,
        // and make sure the DOM is ready
        require([
            "dijit/Menu",
            "dijit/MenuItem",
            "dojo/parser",
            "dojo/domReady!"
        ], function(Menu, MenuItem, parser){
            parser.parse();
        });