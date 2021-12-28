require([
    "dojo/parser", 
    "dijit/form/NumberTextBox"],function(parser, NumberTextBox){

        new NumberTextBox({
            name: "programmatic",
            constraints: {pattern: "0.######"},
            value: "1.0000000",
        }, "programmatic").startup();
    });