require([
    "dojo/parser", 
    "dijit/registry", 
    "dojo/on", 
    "dijit/form/TextBox", 
    "dojo/domStyle",
    "dojo/domReady!"], function(parser,registry,on,TextBox,domStyle){
    parser.parse();

    /** Part 1 Code
     * Simple Imperative Text Box
     */
     var myTextBox = new dijit.form.TextBox({
        name: "firstname",
        value: "" /* no or empty value! */,
        placeHolder: "type in your name"
    }, "firstname");

    /** Part 2 code */
    var box0 = registry.byId("value0Box");
    var box1 = registry.byId("value1Box");

    box1.set("value", box0.get("value") + " modified");

    on(box0, "change", function(){
         box1.set("value", box0.get("value") + " modified");
    });


});