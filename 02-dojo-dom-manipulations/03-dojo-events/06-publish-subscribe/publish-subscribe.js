require(["dojo/on", "dojo/topic", "dojo/dom-construct", "dojo/dom", "dojo/domReady!"],
    function(on, topic, domConstruct, dom) {

        var alertButton = dom.byId("alertButton"),
            createAlert = dom.byId("createAlert");

        on(alertButton, "click", function() {
            // When this button is clicked,
            // publish to the "alertUser" topic
            topic.publish("alertUser", "I am alerting you.");
        });

        on(createAlert, "click", function(evt){
            // Create another button
            var anotherButton = domConstruct.create("button", {
                innerHTML: "Another alert button"
            }, createAlert, "after");

            // When the other button is clicked,
            // publish to the "alertUser" topic
            on(anotherButton, "click", function(evt){
                topic.publish("alertUser", "I am also alerting you.");
            });
        });

        // Register the alerting routine with the "alertUser" topic.
        topic.subscribe("alertUser", function(text){
            alert(text);
        });

        //do this from the console window to help people understand the topic subscription
        window.myTopic = topic;
        //type the following command from console
        //myTopic.publish("alertUser","test from global console")

});