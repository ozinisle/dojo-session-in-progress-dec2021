require(["dojo/dom","dojo/on","dojo/query", "dojo/NodeList-fx", "dojo/domReady!"], 
    function(dom,on,query){
    
        query("#btn").on("click", function(){
            var nodes = query("li.fresh");
            nodes.on("click", function(){
                alert("I love fresh " + this.innerHTML);
            });
        });

        // query("#btn").on("click", function(){
        //     query("li.fresh").on("click", function(event){
        //         alert("I love fresh " + event.target.innerHTML);
        //     });
        // });
    
        // query("li.fresh")
        // .addClass("fresher")
        // .attr("title", "freshened")
        // .style("background", "lightblue")
        // .on("click", function(){
        //     alert("I love fresh " + this.innerHTML);
        // });

        query("#enableAnimation").on("click", function(){
            query("li.dried")
                .slideTo({
                    left: 200, auto: true
                })
                .animateProperty({
                    properties: {
                        backgroundColor: { start: "#fff", end: "#ffc" }
                    }
                })
                .play();
        });
    
});