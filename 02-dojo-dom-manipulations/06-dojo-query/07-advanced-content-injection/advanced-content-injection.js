 
        require([
            "dojo/query", 
            "dojo/_base/lang", 
            "dijit/form/CheckBox", 
            "dojo/NodeList-html", 
            "dojo/domReady!"
        ], function (query, lang) {
            var demo = {
                addCheckboxes: function(q){
                    query(q).html('<input name="fruit" value="" data-dojo-type="dijit/form/CheckBox">', {
                        onBegin: function() {
                            var label = lang.trim(this.node.innerHTML),
                                cont = this.content + label;
                            cont = cont.replace('value=""', 'value="'+lang.trim(this.node.innerHTML) + '"');

                            this.content = cont;
                            return this.inherited("onBegin", arguments);
                        },
                        parseContent: true
                    });
                    query("#btn").map(function(node){
                        node.disabled = "disabled";
                    });
                }
            }

            query("#btn").on("click", lang.hitch(demo, "addCheckboxes", "li.alkaline"));
        });


