

require([
    "dojo/ready",
    "dojo/parser",
    "dijit/Tooltip",
    "dojo/dom",
    "dojo/on",
    "dojo/mouse"
], function(ready, parser, Tooltip, dom, on, mouse){
    ready(function(){
        parser.parse();

        Tooltip.defaultPosition = ['after'];

        const tooltip1 = new Tooltip({
            connectId: ["TooltipButton1"],
            label: "I am above",
            position: ['above'],
            "class": "custom-class"
        });        

        const tooltip2 = new Tooltip({
            connectId: ["TooltipButton2"],
            label: "I am below",
            position: ['below']
        });
        
        new Tooltip({
            connectId: ["TooltipButton3"],
            label: "I am before",
            position: ['before']
        });

        new Tooltip({
            connectId: ["TooltipButton4"],
            label: "I am after",
            position: ['after'],
        });

        // the position of this tool tip will be as per the default value set above - which is "below"
        new Tooltip({
            connectId: ["TooltipButton5"],
            label: "I appear as per default settings",
        });

        //defining tooltips collectively for nodes
        new Tooltip({
            connectId: "myTable",
            selector: "tr",
            getContent: function(matchedNode){
                return matchedNode.getAttribute("tooltipText");
            }
        });

        //adhoc tooltip
        var node = dom.byId('adhocToolTip');
        
        on.once(node, mouse.enter, function(){
            Tooltip.show("I am a tooltip", node);
        });

        on.once(node, mouse.leave, function(){
            Tooltip.hide(node);
        });
        
    });
});