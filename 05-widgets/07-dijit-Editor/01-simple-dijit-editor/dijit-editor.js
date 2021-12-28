require(["dijit/Editor", "dojo/parser","dojo/domReady!"],function(Editor){
    // Make our editor
    var editor = new Editor({
        plugins: ["bold","italic","|","cut","copy","paste","|","insertUnorderedList"]
    }, "myEditor");
    
    editor.startup();
});