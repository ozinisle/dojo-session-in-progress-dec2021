require(["dijit/registry", "dijit/layout/BorderContainer",
    "dijit/layout/TabContainer", "dijit/layout/ContentPane", "dojo/domReady!"],
    function (registry, BorderContainer, TabContainer, ContentPane) {
        // create the main appLayout BorderContainer
        // create the TabContainer
        // create the BorderContainer edge regions

        // create the BorderContainer and attach it to our appLayout div
        var appLayout = new BorderContainer({
            design: "headline"
        }, "appLayout");

        // create the TabContainer
        var contentTabs = new TabContainer({
            region: "center",
            id: "contentTabs",
            tabPosition: "bottom",
            "class": "centerPanel"
        });

        // add the TabContainer as a child of the BorderContainer
        appLayout.addChild(contentTabs);

        // create and add the BorderContainer edge regions
        appLayout.addChild(
            new ContentPane({
                region: "top",
                "class": "edgePanel",
                content: "Header content (top)"
            })
        );
        appLayout.addChild(
            new ContentPane({
                region: "left",
                id: "leftCol", "class": "edgePanel",
                content: "Sidebar content (left)",
                splitter: true
            })
        );

        // Add initial content to the TabContainer
        contentTabs.addChild(
            new ContentPane({
                href: "../02-complex-page-layout/working-with-layouts.html",
                title: "Group 1"
            })
        );

        // start up and do layout
        appLayout.startup();

        function addTab(name) {
            var pane = new ContentPane({
                title: name,
                content: "<h4>" + name + "</h4>"
            });
            // add the new pane to our contentTabs widget
            registry.byId("contentTabs").addChild(pane);
        }

        addTab("Test Tab");
    });