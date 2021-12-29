	// Bring in our custom widget
	require(["dojo/dom",  "app/simpleTemplateWidget/SimpleTemplateWidget", "dojo/domReady!"],
		function(dom, SimpleTemplateWidget){

            const simpleWidgetContainer = dom.byId("simpleTemplateWidgetContainer");

            const simpleTemplateWidget = new SimpleTemplateWidget();

            simpleTemplateWidget.placeAt(simpleWidgetContainer);
			
		});