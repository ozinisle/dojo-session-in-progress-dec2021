require(["dojo/query", "dojo/NodeList-manipulate", "dojo/domReady!"],
    function(query){
        query("#btn").on("click", function(){
            query(".yum") // get elements with the class 'yum'
                .clone() // create a new NodeList containing cloned copies of each element
                .prepend('<span class="emoticon happy"></span>') // inject a span inside each of the cloned elements
                .appendTo("#likes"); // insert the clones into the element with id 'likes'

            query(".yuck")
                .clone()
                .append('<span class="emoticon sad"></span>')
                .appendTo("#dontLikes");
        });
});