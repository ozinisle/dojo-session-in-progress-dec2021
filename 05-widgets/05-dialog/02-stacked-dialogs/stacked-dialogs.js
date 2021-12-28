require(["dijit/Dialog"], function(Dialog) {
    // Create counter
    var counter = 1;
    // Create a new Dialog
    createDialog = function(isFirst) {
        // Create a new dialog
        var dialog = new Dialog({
            // Dialog title
            title: "New Dialog " + counter,
            // Create Dialog content
            content: (!isFirst ? "I am a dialog on top of other dialogs" : "I am the bottom dialog") + 
                "<br /><br /><button onclick='createDialog();'>Create another dialog.</button>"
        });
        dialog.show();
        counter++;
    }
});