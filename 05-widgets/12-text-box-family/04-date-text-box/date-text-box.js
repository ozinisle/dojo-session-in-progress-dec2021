require([
    "dojo/parser", 
    "dijit/form/DateTextBox",
    "dojo/_base/declare",
    "dojo/date/locale",
    "dojo/dom",
    "dijit/registry", 
    "dojo/ready"
],function(parser, DateTextBox, declare, locale,dom,registry,ready){

        /**
         * PART 2
         * IMPORTANT :: NOTE
         * Extending a widget to create a custom widget
         */

         declare("OracleDateTextBox", DateTextBox, {
            oracleFormat: {selector: 'date', datePattern: 'dd-MMM-yyyy', locale: 'en-us'},
            value: "", // prevent parser from trying to convert to Date object
            postMixInProperties: function(){ // change value string to Date object
                this.inherited(arguments);
                // convert value to Date object
                this.value = locale.parse(this.value, this.oracleFormat);
            },
            // To write back to the server in Oracle format, override the serialize method:
            serialize: function(dateObject, options){
                return locale.format(dateObject, this.oracleFormat).toUpperCase();
            }
        });

        function showServerValue(){
            dom.byId('toServerValue').value = document.getElementsByName('oracle')[0].value;
        }
        new OracleDateTextBox({
            value: "31-DEC-2009",
            name: "oracle",
            onChange: function(v){ setTimeout(showServerValue, 0)}
        }, "oracle").startup();
        showServerValue();


        //Part4:: WOrking with two digit years
        ready(function(){
            var myShortYear = registry.byId("myShortYear");
            myShortYear.constraints.fullYear = false;
            myShortYear.set('value', myShortYear.get('value')); // reformat display to short year
        })
    
    });