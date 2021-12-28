require(["dijit/form/Button", "dojo/domReady!"], function(Button) {
    var button2 = new Button({
        iconClass: "dijitIconNewTask",
        showLabel: false,
        label: "Click Me!", // analogous to title when showLabel is false
        onClick: function(){ console.log("Second button was clicked!"); }
    }, "btn2");

    button2.startup();
});