// Require the Dialog class
require([
    "dijit/registry", 
    "dojo/parser", 
    "dojo/dom",
    "dojo/on",
    "dijit/Dialog",
    "dojo/query",
    "dijit/form/Button", 
    "dojo/domReady!"], function(registry, parser, dom, on, Dialog, query, Button){

        //Note :: Declarative way dows not need Dialog to be defined here on script file

        parser.parse();

        var dialog = new Dialog({
            // Dialog title
            title: "Terms and Conditions",
            // Create Dialog content
            content: dom.byId("termsImperative").innerHTML
        });

        on(dom.byId("showDialog"),"click",function(event){
            registry.byId("terms").show();
        });

        on(dom.byId("hideDialog"),"click",function(event){
            registry.byId("terms").hide();
            dialog.hide();
        });

        

        on(dom.byId("showImperativeDialog"),"click",function(event){
            dialog.show();
        });

        //This WONT WORK , as the HTML content is copied over to the dialog
        //So there are typically two elements with the same id
        on(dom.byId("hideImperativeDialog"),"click",function(event){
            dialog.hide();
        });

        //HENCE USE CLASS NAMES TO ASSOCIATE EVENTS
        query(".hideImperativeDialog").on("click",function(event){
            dialog.hide();
        });

        var myButton = new Button({
            label: "Modify Dialog Content",
            onClick: function(){
                dialog.set("content", "Hey, I wasn't there before, I was added at " + new Date() + "!");
                dialog.show();
            }
        }, "progbutton")
  
});