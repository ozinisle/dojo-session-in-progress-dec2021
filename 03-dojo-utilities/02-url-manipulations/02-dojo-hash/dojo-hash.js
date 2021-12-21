require(["dojo/hash", "dojo/topic", "dojo/io-query","dojo/dom","dojo/on", "dojo/domReady!"], 
  function(hash, topic, ioQuery,dom, on){
    topic.subscribe("/dojo/hashchange", function(changedHash){
      // Handle the hash change publish

      console.log("Hash change detected")
    });

    hash(location.href);

    //In order to not to add to the history stack, pass true as the second parameter (replace). 
    //This will update the current browser URL and replace the current history state:
    hash(location.href+"?test",true);
    
    on(dom.byId("ioQueryModification"),'click',function(event){
        var obj = {
          firstParam: true,
          secondParam: false
      }
      hash(ioQuery.objectToQuery(obj));

      dom.byId("ioQueryModification_status").innerHTML = "Url was added with the values '#firstParam=true&secondParam=false'";
    });

    on(dom.byId("updateHash"),'click',function(event){
      var obj = ioQuery.queryToObject(hash());  // get
      obj.someNewParam = true;
      hash(ioQuery.objectToQuery(obj));  // set

      dom.byId("updateHash_status").innerHTML = "Hash has been updated with value 'someNewParam = true'";
    })

    on(dom.byId("updateHashSlashNotation"),'click',function(event){
      var obj = hash().split("/");
      obj.push("trailingSegment");
      hash(obj.join("/"));

      dom.byId("updateHashSlashNotation_status").innerHTML = "Hash has been updated with value '/trailingSegment'";
    });

    on(dom.byId("updateEncodedHashSlashNotation"),'click',function(event){
      hash(encodeURIComponent("hash with & HTML encoding"))

      dom.byId("updateEncodedHashSlashNotation_status").innerHTML = "Hash has been updated with encoded value of 'hash with & HTML encoding'";
    })
});