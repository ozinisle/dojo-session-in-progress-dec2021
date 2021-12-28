require([
        "dijit/form/CheckBox", 
        "dijit/registry", 
        "dojo/dom", 
        "dojo/domReady!"
], function(CheckBox, registry, dom){
    //parser.parse();

    const displaySelected = dom.byId("displaySelected");
    let selectedValues=[];

    var checkBox = new CheckBox({
        name: "checkBoxGroup",
        value: "Modern",
        checked: false,
        //Present here to illustrate multiple ways of adding on change events
        // onChange: function(b){ 
        //     console.log('onChange called with parameter = ' + b + ', and widget value = ' + this.get('value') ); 
        // }
    }, "checkBox1").startup();

    var checkBox = new CheckBox({
        name: "checkBoxGroup",
        value: "Authentic",
        checked: false,
        onChange: function(b){ 
            console.log('onChange called with parameter = ' + b + ', and widget value = ' + this.get('value') ); 
        }
    }, "checkBox2").startup();


    registry.byId("checkBox1").on("change", function(isChecked){
        if(isChecked){
            selectedValues.push(registry.byId("checkBox1").getValue())
            
        } else {
            selectedValues = selectedValues.join(",").replace(registry.byId("checkBox1").value,"").split(",");
            selectedValues = selectedValues.filter(valid=>valid);
        }

        displaySelected.innerHTML = selectedValues.join(",");
    }, true);
});