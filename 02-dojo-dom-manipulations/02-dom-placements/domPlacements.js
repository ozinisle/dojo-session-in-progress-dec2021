require(["dojo/dom", "dojo/dom-construct", "dojo/on", "dojo/domReady!"],
    function(dom, domConstruct, on){

        function moveFirst(){
            var list = dom.byId("list"),
                three = dom.byId("three");

            domConstruct.place(three, list, "first");
        }

        function moveBeforeTwo(){
            var two = dom.byId("two"),
                three = dom.byId("three");

            domConstruct.place(three, two, "before");
        }

        function moveAfterFour(){
            var four = dom.byId("four"),
                three = dom.byId("three");

            domConstruct.place(three, four, "after");
        }

        function moveLast(){
            var list = dom.byId("list"),
                three = dom.byId("three");

            domConstruct.place(three, list);
        }

        // Connect the buttons
        on(dom.byId("moveFirst"), "click", moveFirst);
        on(dom.byId("moveBeforeTwo"), "click", moveBeforeTwo);
        on(dom.byId("moveAfterFour"), "click", moveAfterFour);
        on(dom.byId("moveLast"), "click", moveLast);
});